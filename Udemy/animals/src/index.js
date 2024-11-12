import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");

/**
 * @description place at which all the JSX returned by App component will be rendered)
 */
const root = createRoot(el);

root.render(<App />);
