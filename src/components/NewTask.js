import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask } from "../redux/action";

const NewTask = (props) => {
  const [title, setTitle] = useState();

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTask(title);
    navigate("/");
  };

  return (
    <form id="hello" onSubmit={submitHandler}>
      <input
        name="title_input_name"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn" type="submit">
        ADD TASK
      </button>
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
