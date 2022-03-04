const addTask = (props) => {
  return {
    type: "ADD_TASK",
    payload: props,
  };
};

const deleteTask = () => {
  return {
    type: "DELETE_TASK",
  };
};

export { addTask, deleteTask };
