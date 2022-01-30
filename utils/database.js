import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read PostgreSQL secret connection information from .env file
dotenvSafe.config();

//Connect to the database
const sql = postgres();

//Perform first query
export async function getEvents() {
  const events = await sql`SELECT * FROM events;`;

  return events.map((s) => camelcaseKeys(s));
}

//Get single sport
export async function getSingleSport(id) {
  const sport = await sql`
  SELECT * FROM sport WHERE id=${id};
  `;
  return sport.map((s) => camelcaseKeys(s))[0];
}
