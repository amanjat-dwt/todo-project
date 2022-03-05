const initialState = {
  title: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        title: [...state.title, action.payload],
        id: Math.floor(Math.random() * 200 + 1),
      };

    case "DELETE_TASK":
      return {
        title: state.title.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
