import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; 
// import Home from "./pages/Home";
// import First from "./pages/First";
// import Second from "./pages/Second";
// import Third from "./pages/Third";
// import Fourth from "./pages/Fourth";

const Home = React.lazy(() => import("./pages/Home"));
const First = React.lazy(() => import("./pages/First"));
const Second = React.lazy(() => import("./pages/Second"));
const Third = React.lazy(() => import("./pages/Third"));
const Fourth = React.lazy(() => import("./pages/Fourth"));

function App() {
  return (
    <div className="App">
      Lazy Loading Demo
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<Fourth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
