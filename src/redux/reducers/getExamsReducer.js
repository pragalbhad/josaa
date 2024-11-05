// reducer.js
import {
    GET_EXAMS_REQUEST,
    GET_EXAMS_SUCCESS,
    GET_EXAMS_FAILURE
  } from '../types';
  
  const initialState = {
    loadingStateForExams: false,
    examsData: null,
    error: null
  };
  
  const getExamReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_EXAMS_REQUEST:
        return {
          ...state,
          loadingStateForExams: true,
          error: null
        };
      case GET_EXAMS_SUCCESS:
        return {
          ...state,
          loadingStateForExams: false,
          examsData: action.payload
        };
      case GET_EXAMS_FAILURE:
        return {
          ...state,
          loadingStateForExams: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default getExamReducer;
  