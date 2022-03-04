import React from "react";
import { connect } from "react-redux";

const Tasks = (props) => {
  const taskArray = props.state.title;

  const taskItems = taskArray.map((task) => <li>{task}</li>);

  return <div>{taskItems}</div>;
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Tasks);
