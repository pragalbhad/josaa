// src/reducers/index.js

import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";

const rootReducer =  combineReducers({
  news: newsReducer,
  auth: authReducer
  // other reducers here
});

export default rootReducer;