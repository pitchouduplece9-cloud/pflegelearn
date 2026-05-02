const Stripe = require('stripe');
const { Redis } = require('@upstash/redis');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  // Sécurité : vérifier le token admin
  const authHeader = req.headers['authorization'];
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'GET') return res.status(405).end();

  try {
    const redis = new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });

    // ── 1. Récupérer les clients Stripe
    const customers = await stripe.customers.list({ limit: 100 });
    
    // ── 2. Récupérer les abonnements actifs
    const subscriptions = await stripe.subscriptions.list({ 
      limit: 100, 
      status: 'active' 
    });

    // ── 3. Récupérer les paiements récents
    const charges = await stripe.charges.list({ limit: 20 });

    // ── 4. Récupérer les tokens Redis (élèves avec accès)
    const keys = await redis.keys('token:*');
    
    // ── 5. Construire la liste des élèves
    const students = await Promise.all(
      customers.data.map(async (customer) => {
        const sub = subscriptions.data.find(s => s.customer === customer.id);
        
        // Chercher le token de cet élève
        let token = null;
        let tokenExpiry = null;
        for (const key of keys) {
          const val = await redis.get(key);
          if (val === customer.email) {
            token = key.replace('token:', '');
            // Vérifier TTL
            const ttl = await redis.ttl(key);
            if (ttl > 0) {
              tokenExpiry = new Date(Date.now() + ttl * 1000).toISOString();
            } else {
              tokenExpiry = 'Permanent';
            }
            break;
          }
        }

        return {
          id: customer.id,
          name: customer.name || 'Unbekannt',
          email: customer.email,
          created: customer.created,
          hasAccess: !!token,
          token: token,
          tokenExpiry: tokenExpiry,
          subscription: sub ? {
            id: sub.id,
            status: sub.status,
            currentPeriodEnd: sub.current_period_end,
            plan: sub.items.data[0]?.price?.nickname || 'PflegeLearn Pro',
            amount: sub.items.data[0]?.price?.unit_amount / 100,
          } : null,
        };
      })
    );

    // ── 6. Stats globales
    const activeCount = students.filter(s => s.subscription?.status === 'active').length;
    const totalRevenue = charges.data
      .filter(c => c.paid && !c.refunded)
      .reduce((sum, c) => sum + c.amount, 0) / 100;
    
    const recentPayments = charges.data.slice(0, 10).map(c => ({
      id: c.id,
      amount: c.amount / 100,
      currency: c.currency,
      email: c.billing_details?.email || c.receipt_email,
      date: c.created,
      status: c.paid ? 'paid' : 'failed',
      refunded: c.refunded,
    }));

    res.json({
      stats: {
        totalStudents: students.length,
        activeSubscriptions: activeCount,
        totalRevenue: totalRevenue,
        tokensIssued: keys.length,
      },
      students,
      recentPayments,
    });

  } catch (err) {
    console.error('Admin API error:', err);
    res.status(500).json({ error: err.message });
  }
};
