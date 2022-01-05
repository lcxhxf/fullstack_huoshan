import { combineReducers } from "redux";
import user from "./user";
import app from "./app";
import settings from "./settings";
import monitor from "./monitor";

export default combineReducers({
  user,
  app,
  settings,
  monitor
});