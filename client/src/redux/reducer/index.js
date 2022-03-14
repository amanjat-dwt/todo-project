const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const { id, taskItem } = action.payload;

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id,
            taskItem,
          },
        ],
      };
    // return {
    //   ...state,
    //   tasks: [
    //     ...state.tasks,
    //     {
    //       _id,
    //       task,
    //     },
    //   ],
    // };

    case "DELETE_TASK":
      const newTasks = state.tasks.filter(
        (taskItem) => taskItem.id !== action.payload
      );
      return {
        ...state,
        tasks: newTasks,
      };

    case "EDIT_TASK":
      const index = state.tasks.findIndex(
        (taskItem) => taskItem.id === action.payload.id
      );
      const newTasks2 = [...state.tasks];
      newTasks2[index].taskItem = action.payload.updatedTaskItem;
      return {
        ...state,
        tasks: newTasks2,
      };

    default:
      return state;
  }
};

export default reducer;
