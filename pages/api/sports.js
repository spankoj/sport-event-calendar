import { getSports } from '../../utils/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const sports = await getSports();
    return res.status(200).json(sports);
  }

  res.status(400).json(null);
}
