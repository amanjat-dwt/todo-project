import React from "react";
import { Link } from "react-router-dom";
import Tasks from "./Tasks";

const Home = (props) => {
  return (
    <section>
      <div>
        <h1>CREATE NEW TASK</h1>
      </div>

      <Link to="/newtask">
        <button>Create Task</button>
      </Link>

      <Tasks />
    </section>
  );
};

export default Home;
