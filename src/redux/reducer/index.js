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

    case "EDIT_TASK":
      const index = state.title.findIndex((task) => task.id !== action.id);
      const newArray = [...state.title];
      newArray[index] = action.payload;
      return {
        ...state,
        title: newArray,
      };

    default:
      return state;
  }
};

export default reducer;
