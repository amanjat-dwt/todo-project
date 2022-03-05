const initialState = {
  title: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        title: [...state.title, action.payload],
      };

    case "DELETE_TASK":
      return {
        title: state.filter((title) => title.i !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
