import {
  deleteEventById,
  getEvents,
  insertEvent,
} from '../../../utils/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const events = await getEvents();
    return res.status(200).json(events);
  } else if (req.method === 'POST') {
    const events = await insertEvent(req.body);
    return res.status(200).json({ events: events });
  } else if (req.method === 'DELETE') {
    const id = JSON.parse(req.body.id);
    const events = await deleteEventById(id);
    return res.status(200).json({ events: events });
  }

  res.status(400).json(null);
}
