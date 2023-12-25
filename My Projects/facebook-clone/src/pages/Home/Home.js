import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <Outlet />
    </div>
  );
}

export default Home;
