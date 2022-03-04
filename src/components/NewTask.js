import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addTask } from "../redux/action";

const NewTask = (props) => {
  console.log("props", props);
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTask("helo");
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="title" onChange={inputChangeHandler} />
      <div>
        {/* <Link to="/" element={<Home />}> */}
        <button type="submit">ADD TASK</button>
        {/* </Link> */}

        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => dispatch(addTask("ask")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewTask);
