import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../redux/action/index";

const Tasks = (props) => {
  const taskArray = props.state.title;

  const taskDeleteHandler = (key) => {
    console.log(key);
    props.deleteTask(key);
  };

  const uKey = props.state.id;
  console.log(uKey);

  const taskItems = taskArray.map((task) => (
    <ul key={uKey}>
      <li>
        <span>
          {task}
          <button className="btn-small" onClick={taskDeleteHandler}>
            delete
          </button>
        </span>
      </li>
    </ul>
  ));

  console.log(taskItems);

  return (
    <div>
      <div className="flex-container">{taskItems}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (key) => {
      return dispatch(deleteTask(key));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
