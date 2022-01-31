import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

export default function Home({ sports }) {
  return (
    <div>
      <h1>Sport Event Calendar</h1>
      <EventForm sports={sports} />
      <EventList />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/events`);

  const sports = await res.json();

  return { props: { sports } };
}
