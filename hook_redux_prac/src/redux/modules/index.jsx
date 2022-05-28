import { combineReducers } from "redux";
import magicReducer from './magicReducer';

const rootReducer = combineReducers ({
  magicReducer
});

export default rootReducer;