import React from "react";
import { connect, useDispatch } from "react-redux";
import { deleteTask } from "../redux/action/index";

const Tasks = (props) => {
  const dispatch = useDispatch();
  const taskArray = props.state.title;
  console.log(taskArray);

  const taskItems = taskArray.map((task) => (
    <ul key={task.id}>
      <li>
        <span>{task.data}</span>
        <button
          className="btn-small"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          delete
        </button>
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
//     deleteTask: (id) => {
//       return dispatch(deleteTask(id));
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Tasks);
