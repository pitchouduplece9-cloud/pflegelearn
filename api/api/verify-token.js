import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ valid: false, error: 'No token' });
  }

  const email = await redis.get(`token:${token}`);

  if (email) {
    return res.status(200).json({ valid: true, email });
  } else {
    return res.status(401).json({ valid: false });
  }
}
