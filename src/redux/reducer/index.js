const initialState = {
  title: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const { id, data } = action.payload;

      return {
        ...state,
        title: [
          ...state.title,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TASK":
      const newList = state.title.filter((task) => task.id !== action.payload);
      return {
        ...state,
        title: newList,
      };

    default:
      return state;
  }
};

export default reducer;
