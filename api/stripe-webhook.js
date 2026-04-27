import Stripe from 'stripe';
import { Redis } from '@upstash/redis';
import { randomUUID } from 'crypto';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name?.split(' ')[0] || 'Lernende/r';

    // Générer un token unique
    const token = randomUUID();

    // Stocker le token dans Redis (valide 365 jours)
    await redis.set(`token:${token}`, email, { ex: 31536000 });

    // Lien d'accès V5
    const accessLink = `https://pflegelearn.site/PflegeLearn_V5.html?token=${token}`;

    // Envoyer email Brevo
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email }],
        templateId: 2,
        params: { 
          FIRSTNAME: name,
          ACCESS_LINK: accessLink
        },
      }),
    });
  }

  res.json({ received: true });
}

export const config = { api: { bodyParser: false } };

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}
