const addTask = (props) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime().toString(),
      data: props,
    },
  };
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
      id: new Date().getTime().toString(),
      data: props,
    },
  };
};

export { addTask, deleteTask, editTask };
