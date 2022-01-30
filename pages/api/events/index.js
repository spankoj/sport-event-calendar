import { getEvents, getSport } from '../../../utils/database';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const events = getEvents();
    return res.status(200).json(events);
  } else if (req.method === 'GET') {
    const sport = getSport();
    return res.status(200).json(sport);
  }
  // else if (req.method === 'POST') {
  //   const image = await insertImage(req.body.data);
  //   return res.status(200).json({ image: image });
  // }
  // else if (req.method === 'DELETE') {
  //   const id = JSON.parse(req.body.id);
  //   const image = await deleteImageById(id);
  //   return res.status(200).json({ image: image });
  // }

  res.status(400).json(null);
}

// const events = getEvents();
// export default (req, res) => {
//   res.status(200).json(events);
// };
