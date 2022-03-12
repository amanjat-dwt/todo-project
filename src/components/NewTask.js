import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../redux/action";

const NewTask = (props) => {
  const [task, setTask] = useState();

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTask(task);
    navigate("/");
  };

  return (
    <form id="hello" onSubmit={submitHandler}>
      <input name="title_input_name" placeholder="title" onChange={(e) => setTask(e.target.value)} />
      <button className="btn" type="submit">
        ADD TASK
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      return dispatch(addTask(task));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
