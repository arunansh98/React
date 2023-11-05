import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "./context/books";

const el = document.getElementById("root");

const root = createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
