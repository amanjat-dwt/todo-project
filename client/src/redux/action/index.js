import * as api from "../../api/index";

// const addTask = (props) => {
//   return {
//     type: "ADD_TASK",
//     payload: {
//       id: new Date().getTime().toString(),
//       taskItem: props,
//     },
//   };
// };

const addTask = (props) => async (dispatch) => {
  try {
    const { data } = await api.createTask(props);
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: data._id,
        taskItem: data.props,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

const editTask = (props) => {
  return {
    type: "EDIT_TASK",
    payload: {
      id: props.id,
      updatedTaskItem: props.resetTitle,
    },
  };
};

export { addTask, deleteTask, editTask };
