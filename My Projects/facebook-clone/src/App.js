import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import PostsPage from "./pages/Posts/Posts";
import ProfilePage from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
