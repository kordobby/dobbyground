import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./coutner";
import user from "./user";

const rootReducer = combineReducers({
  todos,
  counter,
  user,
});

export default rootReducer;
