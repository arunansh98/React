import { Outlet } from 'react-router-dom';
import { useFetchPostsQuery } from '../../store';
import Header from './components/Header';

function Home() {
  const { data, error, isFetching } = useFetchPostsQuery();
  console.log('data', data);
  return (
    <div className="home">
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
