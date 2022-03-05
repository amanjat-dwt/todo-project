const addTask = (props) => {
  return {
    type: "ADD_TASK",
    payload: props,
  };
};

const deleteTask = (props) => {
  return {
    type: "DELETE_TASK",
    payload: props.id,
  };
};

export { addTask, deleteTask };
