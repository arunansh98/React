import { useFetchPostsQuery } from '../../store';
import Footer from './components/Footer';
import Header from './components/Header';

function Home() {
  const { data, error, isFetching } = useFetchPostsQuery();
  console.log('data', data);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Home;
