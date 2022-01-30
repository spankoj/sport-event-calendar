import { getEvents } from '../../../utils/database';

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     const sport = getSport();
//     return res.status(200).json(sport);
//   }
//   res.status(400).json(null);
// }

const events = getEvents();
export default (req, res) => {
  res.status(200).json(events);
};
