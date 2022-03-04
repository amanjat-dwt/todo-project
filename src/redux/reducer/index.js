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
        // return posts.filter((post) => post._id !== action.payload);
        title: "",
      };

    default:
      return state;
  }
};

export default reducer;
