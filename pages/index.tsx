import { usePwa } from '../hooks/usePwa';

export default function Home() {
  usePwa();

  return <div className='w-100 h-4 bg-red-500'></div>;
}
