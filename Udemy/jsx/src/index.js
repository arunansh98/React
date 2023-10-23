// 1) Import the React and ReactDOM libraries
import React from "react";
import { createRoot } from "react-dom/client";
import Component from "./App";

// 2) Get a reference to the div with id root.
const el = document.getElementById("root");

// 3) Tell React to take control of that element.
const root = createRoot(el);

// 4) Show the component on the screen.
root.render(<Component />);
