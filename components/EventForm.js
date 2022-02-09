import { useState } from 'react';

export default function EventForm({ sports, teams }) {
  const [datetime, setDateTime] = useState('');
  const [sport, setSport] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [details, setDetails] = useState('');
  console.log(datetime);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:3000/api/events`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            dateTime: datetime,
            sportId: sport,
            homeTeamId: homeTeam,
            awayTeamId: awayTeam,
            details: details,
          }),
        });

        window.location.reload();
      }}
    >
      <div>
        <h3>New Event</h3>

        {/* Calendar */}
        <label htmlFor="calendar">Calendar</label>
        <input
          title="datetime"
          type="datetime-local"
          name="datetime"
          value={datetime}
          min="2021-01-20"
          max="2200-06-14"
          onChange={(e) => setDateTime(e.currentTarget.value)}
          required
        />
        <br />
        {/* Sport */}
        <label htmlFor="sport-select">Sport</label>

        <select
          name="sport"
          id="sport-select"
          onChange={(e) => setSport(e.currentTarget.value)}
          required
        >
          <option value="">--Please choose Sport--</option>
          {sports.map((item) => (
            <option key={`sport-${item.id}`} value={item.id}>
              {item.sportname}
            </option>
          ))}
        </select>
        <br />
        {/* HomeTeam */}
        <label htmlFor="hometeam-select">Home Team</label>

        <select
          name="hometeam"
          id="hometeam-select"
          onChange={(e) => setHomeTeam(e.currentTarget.value)}
          required
        >
          <option value="">--Please choose Home Team--</option>
          {teams.map((item) => (
            <option key={`hometeam-${item.id}`} value={item.id}>
              {item.teamname}
            </option>
          ))}
        </select>
        <br />
        {/* Away Team */}
        <label htmlFor="awayteam-select">Away Team</label>

        <select
          name="awayteam"
          id="awayteam-select"
          onChange={(e) => setAwayTeam(e.currentTarget.value)}
          required
        >
          <option value="">--Please choose Away Team--</option>
          {teams.map((item) => (
            <option key={`awayteam-${item.id}`} value={item.id}>
              {item.teamname}
            </option>
          ))}
        </select>
        <br />
        {/* Details */}
        <label htmlFor="details">Details</label>
        <input
          title="details"
          value={details}
          type="details"
          onChange={(e) => setDetails(e.currentTarget.value)}
          placeholder="Details"
          required
        />
        <br />
        <input type="submit" value="Save" />
      </div>
    </form>
  );
}
