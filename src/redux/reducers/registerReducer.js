import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT } from "../types";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types";

const initialState = {
  loadingStateForSignUp: false,
  data: null,
  error: null,

  loadingStateForSignIn: false,
  signInData: null,
  errorForSignIn: null,

  isLogIn: false,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loadingStateForSignUp: true, error: null };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loadingStateForSignUp: false,
        data: action.payload,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loadingStateForSignUp: false,
        data: null,
        error: action.payload,
      };

    case LOGIN_REQUEST:
      return { ...state, loadingStateForSignIn: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loadingStateForSignIn: false,
        data: action.payload,
        error: null,
        isLogIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loadingStateForSignIn: false,
        data: null,
        error: action.payload,
        isLogIn: false
      };
    case LOGOUT:
      return {
        ...state,
        isLogIn: false,
        data: null, 
      };
    default:
      return state;
  }
};

export default registrationReducer;
