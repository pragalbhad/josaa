import {
    GET_COLLEGE_TRENDS_REQUEST,
    GET_COLLEGE_TRENDS_SUCCESS,
    GET_COLLEGE_TRENDS_FAILURE,
  } from '../types';
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const collegeTrendsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COLLEGE_TRENDS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_COLLEGE_TRENDS_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case GET_COLLEGE_TRENDS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default collegeTrendsReducer;
  