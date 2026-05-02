const Stripe = require('stripe');
const { Redis } = require('@upstash/redis');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const redis = new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  // ── Paiement réussi → générer token
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name?.split(' ')[0] || 'Lernende/r';

    const { randomUUID } = require('crypto');
    const token = randomUUID();
    await redis.set(`token:${token}`, email, { ex: 31536000 });

    const accessLink = `https://pflegelearn.site/PflegeLearn_V5.html?token=${token}`;

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email }],
        templateId: 2,
        params: { FIRSTNAME: name, ACCESS_LINK: accessLink },
      }),
    });

    console.log(`✅ Accès accordé à ${email}`);
  }

  // ── Abonnement annulé → révoquer accès
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    const customerId = subscription.customer;

    // Récupérer l'email du client
    const customer = await stripe.customers.retrieve(customerId);
    const email = customer.email;

    if (email) {
      // Trouver et supprimer le token de cet élève
      const keys = await redis.keys('token:*');
      for (const key of keys) {
        const val = await redis.get(key);
        if (val === email) {
          await redis.del(key);
          console.log(`🚫 Accès révoqué pour ${email} (token: ${key})`);
          break;
        }
      }

      // Envoyer email d'annulation via Brevo
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: [{ email }],
          sender: { name: 'PflegeLearn', email: 'noreply@pflegelearn.site' },
          subject: 'Dein PflegeLearn Pro Abonnement wurde gekündigt',
          htmlContent: `
            <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:2rem">
              <h2 style="color:#0d9488">PflegeLearn</h2>
              <p>Hallo,</p>
              <p>dein <strong>PflegeLearn Pro</strong> Abonnement wurde erfolgreich gekündigt.</p>
              <p>Dein Zugang ist sofort deaktiviert.</p>
              <p>Du kannst jederzeit wieder abonnieren:</p>
              <a href="https://buy.stripe.com/9B6aEQfQC5uPcmUfA40RG01" 
                 style="background:#0d9488;color:#fff;padding:.75rem 1.5rem;border-radius:8px;text-decoration:none;display:inline-block;margin-top:1rem">
                Wieder abonnieren
              </a>
              <p style="margin-top:2rem;color:#666;font-size:.85rem">Das PflegeLearn Team</p>
            </div>
          `,
        }),
      });

      console.log(`📧 Email d'annulation envoyé à ${email}`);
    }
  }

  // ── Paiement échoué → notifier
  if (event.type === 'invoice.payment_failed') {
    const invoice = event.data.object;
    const email = invoice.customer_email;
    console.log(`⚠️ Paiement échoué pour ${email}`);
  }

  res.json({ received: true });
};

module.exports.config = { api: { bodyParser: false } };

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}
