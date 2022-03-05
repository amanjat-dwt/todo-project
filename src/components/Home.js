import React from "react";
import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import "./Home.css";

const Home = (props) => {
  return (
    <section className="home-container">
      <div>
        <h1>CREATE NEW TASK</h1>
      </div>
      <div className="btn-div">
        <Link to="/newtask">
          <button className="btn">Create Task</button>
        </Link>
      </div>
      <Tasks />
    </section>
  );
};

export default Home;
