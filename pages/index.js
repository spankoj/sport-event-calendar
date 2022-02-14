import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

export default function Home({ sports, teams, events }) {
  return (
    <div>
      <h1>Sport Event Calendar</h1>
      <EventForm sports={sports} teams={teams} />
      <EventList events={events} />
    </div>
  );
}

export async function getServerSideProps() {
  const fetchedSports = await fetch(`http://localhost:3000/api/sports`);
  const fetchedTeams = await fetch(`http://localhost:3000/api/teams`);
  const fetchedEvents = await fetch(`http://localhost:3000/api/events`);

  const sports = await fetchedSports.json();
  const teams = await fetchedTeams.json();
  const events = await fetchedEvents.json();

  return {
    props: { sports, teams, events },
  };
}
