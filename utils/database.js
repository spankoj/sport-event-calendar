import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Read PostgreSQL secret connection information from .env file
dotenvSafe.config();

//Connect to the database
const sql = postgres();

//Get the events
export async function getEvents() {
  const events = await sql`
    SELECT
    events.id AS events_id,
    datetime,
    sports.sportname AS sport_id,
    t1.teamname AS home_team_id,
    t2.teamname AS away_team_id,
    details
    FROM
    events
    LEFT JOIN
    sports
    ON
    events.sport_id = sports.id
    LEFT JOIN
    teams t1
    ON
    events.home_team_id = t1.id
    LEFT JOIN
    teams t2
    ON
    events.away_team_id = t2.id;`;

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

// Insert event
export async function insertEvent({
  dateTime,
  sportId,
  homeTeamId,
  awayTeamId,
  details,
}) {
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
// Delete single event
export async function deleteEventById(id) {
  const events = await sql`
  DELETE
  FROM
  events
  WHERE
  id=${id}
  `;

  return events.map((event) => camelcaseKeys(event))[0];
}
