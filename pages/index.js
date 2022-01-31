import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

export default function Home({ sports, teams }) {
  return (
    <div>
      <h1>Sport Event Calendar</h1>
      <EventForm sports={sports} teams={teams} />
      <EventList />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/sports`);
  const res2 = await fetch(`http://localhost:3000/api/teams`);

  const sports = await res.json();
  const teams = await res2.json();

  return {
    props: { sports, teams },
  };
}
