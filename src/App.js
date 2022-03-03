import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Tasks from "./components/Tasks";


function App() {
  const [taskArray, setTaskArray] = useState([]);

  return (
    <section>
      <Home />

      <div>
        <Tasks data={taskArray} />
      </div>
    </section>
  );
}

export default App;
