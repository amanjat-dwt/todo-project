import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewTask = (props) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskItem = {
        title: input,
    };
    props.onAddTAsk(taskItem);
    console.log('new task props', props);
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

export default NewTask;
