import React from "react";
import { Link } from "react-router-dom";
import NewTask from "./NewTask";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <section>
      <div>
        <h1>CREATE NEW TASK</h1>
      </div>

      <Link to="/newtask">
        <button>Create Task</button>
      </Link>
      <div style={{ margin: 20 }}>
        <NewTask />
      </div>

      {props.state.title}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Home);
