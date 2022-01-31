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

//Get sports
export async function getSports() {
  const sports = await sql`SELECT * FROM sports;`;

  return sports.map((s) => camelcaseKeys(s));
}

//Get teams
export async function getTeams() {
  const teams = await sql`SELECT * FROM teams;`;

  return teams.map((s) => camelcaseKeys(s));
}

//Get single sport
// export async function getSportById(id) {
//   const sports = await sql`
//   SELECT * FROM sports WHERE id=${id};
//   `;
//   return sports.map((s) => camelcaseKeys(s))[0];
// }

// Insert event
export async function insertEvent({
  dateTime,
  sportId,
  homeTeamId,
  awayTeamId,
  details,
}) {
  // console.log();
  const events = await sql`
    INSERT INTO events
      (datetime,
      sport_id,
      home_team_id,
      away_team_id,
      details)
    VALUES
      (${dateTime}, ${sportId}, ${homeTeamId}, ${awayTeamId},${details})
    RETURNING
      datetime,
      sport_id,
      home_team_id,
      away_team_id,
      details
  `;
  return events.map((events) => camelcaseKeys(events))[0];
}
