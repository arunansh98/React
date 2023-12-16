import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import PostsPage from './pages/Posts/Posts';
import ProfilePage from './pages/Profile/Profile';
import { HOME, POSTS, PROFILE } from './constants/routeConstants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/' + HOME} element={<HomePage />} />
        <Route path={'/' + POSTS} element={<PostsPage />} />
        <Route path={'/' + PROFILE} element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
