import React from "react";
import { connect } from "react-redux";

const Tasks = (props) => {
  const taskArray = props.state.title;

  const taskDeleteHandler = (task) => {
    console.log(`button ${task.id} clicked`);
  };

  const taskItems = taskArray.map((task, i) => (
    <li key={i}>
      <span>{task}</span>
      <button className="btn-small" onClick={taskDeleteHandler}>
        delete
      </button>
    </li>
  ));

  console.log(taskItems);

  return (
    <div>
      <div className="flex-container">{taskItems}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Tasks);
