import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewTask from "./components/NewTask";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="newTask" element={<NewTask />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
