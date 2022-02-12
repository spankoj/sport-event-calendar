import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export default function EventList({ events }) {
  const handleDelete = async (item) => {
    const answer = window.confirm(
      `Do you really want to delete the event: ${item.name} on ${format(
        new Date(item.datetime),
        'eee., dd.MM.yyyy, HH:mm,',
      )} from your list?`,
    );

    if (answer === true) {
      console.log(item);
      await fetch(`http://localhost:3001/events/${item.id}`, {
        method: 'DELETE',
      });

      // This is just a fast way of refreshing the information
      window.location.reload();
    }
  };
  return (
    <div>
      <h3>All Events</h3>
      <ol>
        {events.map((event) => (
          <li key={event.id}>
            <div>
              <p>{`${format(
                new Date(event.datetime),
                'eee., dd.MM.yyyy, HH:mm,',
              )} ${event.sportId}, ${event.homeTeamId}-${event.awayTeamId}, ${
                event.details
              } `}</p>
              <button onClick={() => handleDelete(event)}>Delete</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
