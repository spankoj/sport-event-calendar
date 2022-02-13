import { format } from 'date-fns';

export default function EventList({ events }) {
  return (
    <div>
      <h3>All Events</h3>
      <ol>
        {events.map((event) => (
          <li key={event.eventsId}>
            <div>
              <p>{`${format(
                new Date(event.datetime),
                'eee., dd.MM.yyyy, HH:mm,',
              )} ${event.sportId}, ${event.homeTeamId}-${event.awayTeamId}, ${
                event.details
              } `}</p>

              <button
                onClick={async () => {
                  const answer = window.confirm(
                    `Do you really want to delete the event`,
                  );
                  if (answer === true) {
                    await fetch(`http://localhost:3000/api/events`, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ id: event.eventsId }),
                    });

                    window.location.reload();
                  }
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
