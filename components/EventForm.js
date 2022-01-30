import { useState } from 'react';

export default function EventForm({}) {
  const [datetime, setDateTime] = useState('');
  const [sport, setSport] = useState('');
  const [details, setDetails] = useState('');
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3000/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            datetime: datetime,
            sport: sport,
            details: details,
          }),
        });
        window.location.reload();
      }}
    >
      <div>
        <h3>New Event</h3>

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
        <label htmlFor="sport-select">Choose a sport:</label>

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

        <input
          title="details"
          value={details}
          type="details"
          onChange={(e) => setDetails(e.currentTarget.value)}
          placeholder="Details"
          required
        />
        <button>Add</button>
      </div>
    </form>
  );
}
