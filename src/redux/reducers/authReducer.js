// src/redux/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../types';

const initialState = {
  user: null,
  role: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        role: null,
      };
    default:
      return state;
  }
};

export default authReducer;
