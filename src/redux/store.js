import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import newsReducer from './reducers/newsReducer';
import collegeTrendsReducer from './reducers/collegeTrendsReducer';
import buttonReducer from './reducers/buttonReducer';
import registrationReducer from './reducers/registerReducer';
import getProfileReducer from './reducers/getProfileReducer';
import institutesReducer from './reducers/intitutesReducer';
import blogReducer from './reducers/blogReducer';
import getInstituteNameReducer from './reducers/getInstituteNameReducer';
import getExamReducer from './reducers/getExamsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  newsReducer: newsReducer,
  collegeTrends: collegeTrendsReducer,
  buttonReducer: buttonReducer,
  register: registrationReducer,
  getProfile: getProfileReducer,
  institutesReducer: institutesReducer,
  blogReducer: blogReducer,
  getInstituteNameReducer: getInstituteNameReducer,
  getExamReducer: getExamReducer
});

const loggerMiddleware = store => next => action => {
  console.log('Dispatching action:', action);
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
