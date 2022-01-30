import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

export default function Home({ sport }) {
  return (
    <div>
      <h1>Sport Event Calendar</h1>
      <EventForm sport={sport} />
      <EventList />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/events`);

  const sport = await res.json();

  return { props: { sport } };
}
