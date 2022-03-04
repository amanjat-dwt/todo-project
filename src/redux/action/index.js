const addTask = (props) => {
  return {
    type: "ADD_TASK",
    payload: props,
  };
};

const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id,
  };
};

export { addTask, deleteTask };
