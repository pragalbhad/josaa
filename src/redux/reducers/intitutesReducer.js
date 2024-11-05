import {
    GET_INSTITUTES_REQUEST,
    GET_INSTITUTES_SUCCESS,
    GET_INSTITUTES_FAILURE
  } from '../types';
  
  const initialState = {
    loadingStateForIntitutes: false,
    intitutesData: null,
    error: null
  };
  
  const institutesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_INSTITUTES_REQUEST:
        return {
          ...state,
          loadingStateForIntitutes: true,
          error: null
        };
      case GET_INSTITUTES_SUCCESS:
        return {
          ...state,
          loadingStateForIntitutes: false,
          intitutesData: action.payload
        };
      case GET_INSTITUTES_FAILURE:
        return {
          ...state,
          loadingStateForIntitutes: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default institutesReducer;
  