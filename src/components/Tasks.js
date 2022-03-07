import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/action/index";
import "./Tasks.css";

const Tasks = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [resetTitle, setResetTitle] = useState();
  const dispatch = useDispatch();
  const taskArray = props.state.title;
  console.log(taskArray);

  const editHandler = (e) => {
    setIsEditing(true);
  };

  const taskItems = taskArray.map((task) => (
    <ul key={task.id}>
      <li className="task-div">
        {isEditing ? (
          <div>
            <input onChange={(e) => setResetTitle(e.target.value)} />
            <button
              className="btn-small"
              onClick={(e) => {
                dispatch(editTask(resetTitle));
                setIsEditing(false);
              }}
            >
              done
            </button>
          </div>
        ) : (
          <span>{task.data}</span>
        )}
        {!isEditing && (
          <button className="btn-small" onClick={editHandler}>
            edit
          </button>
        )}
        {!isEditing && (
          <button
            className="btn-small"
            onClick={() => dispatch(deleteTask(task.id))}
          >
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     editTask: (resetTitle) => {
//       return dispatch(editTask(resetTitle));
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Tasks);
