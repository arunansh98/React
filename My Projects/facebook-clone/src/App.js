import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import HomePage from './pages/Home/Home';
import { LANDING, HOME, PROFILE, POSTS } from './constants/routeConstants';
import Posts from './pages/Home/components/Posts';
import Profile from './pages/Home/components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LANDING} element={<LandingPage />} />
        <Route path={HOME} element={<HomePage />}>
          <Route path={POSTS} element={<Posts />} />
          <Route path={PROFILE} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
