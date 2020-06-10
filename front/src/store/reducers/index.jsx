import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import message from "./message";
import auth from "./auth";

const rootReducer = combineReducers({
  leads,
  errors,
  message,
  auth,
});

export default rootReducer;
