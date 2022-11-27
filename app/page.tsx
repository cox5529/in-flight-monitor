import AirportMap from '../components/AirportMap';

export async function generateStaticParams() {
  return [];
}

export default function Home() {
  return (
    <div className='h-screen'>
      <AirportMap />
    </div>
  );
}
