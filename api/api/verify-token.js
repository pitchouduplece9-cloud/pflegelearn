const { Redis } = require('@upstash/redis');

module.exports = async function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ valid: false, error: 'No token' });
  }

  const redis = new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });

  const email = await redis.get(`token:${token}`);

  if (email) {
    return res.status(200).json({ valid: true, email });
  } else {
    return res.status(401).json({ valid: false });
  }
}
