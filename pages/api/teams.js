import { getTeams } from '../../utils/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const teams = await getTeams();
    return res.status(200).json(teams);
  }

  res.status(400).json(null);
}

// const events = getEvents();
// export default (req, res) => {
//   res.status(200).json(events);
// };
