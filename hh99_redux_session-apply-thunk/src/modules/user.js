const initialState = {
  name: "예상기",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_NAME":
      return state;

    default:
      return state;
  }
};

export default user;
