import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import HomePage from './pages/Home/Home';
import ProfilePage from './pages/Profile/Profile';
import { LANDING, HOME, PROFILE } from './constants/routeConstants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/' + LANDING} element={<LandingPage />} />
        <Route path={'/' + HOME} element={<HomePage />} />
        <Route path={'/' + PROFILE} element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
