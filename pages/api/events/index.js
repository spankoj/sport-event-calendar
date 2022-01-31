import { getEvents, getSportById, getSports } from '../../../utils/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const events = await getEvents();
    return res.status(200).json(events);
  } else if (req.method === 'GET') {
    const sport = getSports();
    return res.status(200).json(sport);
  } else if (req.method === 'GET') {
    const sport = getSportById();
    return res.status(200).json(sport);
  }

  res.status(400).json(null);
}

// const events = getEvents();
// export default (req, res) => {
//   res.status(200).json(events);
// };
