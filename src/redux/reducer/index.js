const initialState = {
  title: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        title: action.payload,
      };

    case "DELETE_TASK":
      return {
        title: "",
      };

    default:
      return state;
  }
};

export default reducer;
