import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTask } from "../redux/action";

const NewTask = (props) => {
  const [title, setTitle] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTask(title);
  };

  return (
    <form id="hello" onSubmit={submitHandler}>
      <input name="title_input_name" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">ADD TASK</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (title) => {
      return dispatch(addTask(title));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
