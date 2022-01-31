import { useState } from 'react';

export default function EventForm(props) {
  const [dateTime, setDateTime] = useState('');
  const [sport, setSport] = useState('');
  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [details, setDetails] = useState('');

  return (
    <form>
      <div>
        <h3>New Event</h3>

        {/* Calendar */}
        <label htmlFor="calendar">Calendar:</label>
        <input
          title="datetime"
          type="datetime-local"
          name="datetime"
          value={dateTime}
          min="2021-01-20"
          max="2200-06-14"
          onChange={(e) => setDateTime(e.currentTarget.value)}
          required
        />
        <br />
        {/* Sport */}
        <label htmlFor="sport-select">Choose a Sport:</label>

        <select
          name="sport"
          id="sport-select"
          onChange={(e) => setSport(e.currentTarget.value)}
          required
        >
          <option value="">--Please choose an option--</option>
          {/* {sport.map((item) => (
            <option key={`sport-${item.id}`} value={item.id}>
              {item.name}
            </option>
          ))} */}
        </select>
        <br />
        {/* HomeTeam */}
        <label htmlFor="hometeam-select">Choose Home Team:</label>

        <select
          name="hometeam"
          id="hometeam-select"
          onChange={(e) => setHomeTeam(e.currentTarget.value)}
          required
        >
          <option value="">--Please choose an option--</option>
          {/* {sport.map((item) => (
            <option key={`sport-${item.id}`} value={item.id}>
              {item.name}
            </option>
          ))} */}
        </select>
        <br />
        {/* Away Team */}
        <label htmlFor="awayteam-select">Choose Away Team:</label>

        <select
          name="awayteam"
          id="awayteam-select"
          onChange={(e) => setAwayTeam(e.currentTarget.value)}
          required
        >
          <option value="">--Please choose an option--</option>
          {/* {sport.map((item) => (
            <option key={`sport-${item.id}`} value={item.id}>
              {item.name}
            </option>
          ))} */}
        </select>
        <br />
        {/* Details */}
        <label htmlFor="details">Details:</label>
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
