const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

export const plus = () => {
  return { type: PLUS };
};

export const minus = () => {
  return { type: MINUS };
};

const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;

    default:
      return state;
  }
};

export default counter;
