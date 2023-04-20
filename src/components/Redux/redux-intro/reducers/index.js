import { chengeTheNumber, multDivTheNumber, todoReducer } from "./allReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  chengeTheNumber,
  multDivTheNumber,
  todoReducer,
});
export default rootReducer;
