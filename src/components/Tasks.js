import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/action";
import "./Tasks.css";

const Tasks = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [resetTitle, setResetTitle] = useState();
  const dispatch = useDispatch();
  const { tasks } = props.state;

  const editHandler = (id) => {
    setIsEditing(id);
  };

  const titleChangeHandler = (e) => {
    console.log("title change handler", e.target.value);
    setResetTitle(e.target.value);
  };

  const doneHandler = (id) => {
    dispatch(editTask({ id, resetTitle }));
    setIsEditing(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.editTask(resetTitle);
  };

  const taskItems = tasks.map((task) => (
    <ul key={task.id}>
      <li className="task-div">
        {isEditing === task.id ? (
          <form id="hello" onSubmit={submitHandler}>
            <input className="edit-input" onChange={titleChangeHandler} />
            <button className="btn-small" onClick={() => doneHandler(task.id)} type="button">
              done
            </button>
          </form>
        ) : (
          <span>{task.taskItem}</span>
        )}
        {!isEditing && (
          <button className="btn-small" onClick={() => editHandler(task.id)}>
            edit
          </button>
        )}
        {!isEditing && (
          <button className="btn-small" onClick={() => dispatch(deleteTask(task.id))}>
            delete
          </button>
        )}
      </li>
    </ul>
  ));

  return (
    <div>
      <div className="flex-container">{taskItems}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: ({ id, updatedTaskItem }) => dispatch(editTask({ id, updatedTaskItem })),
  };
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
