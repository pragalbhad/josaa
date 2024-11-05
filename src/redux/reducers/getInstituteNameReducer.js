import {
    GET_INSTITUTE_REQUEST,
    GET_INSTITUTE_SUCCESS,
    GET_INSTITUTE_FAILURE,
  } from "../types";
  
  const initialState = {
    instituteData: null,
    loadingStateForInstitute: false,
    error: null,
  };
  
  const getInstituteNameReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_INSTITUTE_REQUEST:
        return { ...state, loadingStateForInstitute: true, error: null };
        
      case GET_INSTITUTE_SUCCESS:
        return {
          ...state,
          instituteData: action.payload,
          loadingStateForInstitute: false,
          error: null,
        };
        
      case GET_INSTITUTE_FAILURE:
        return { ...state, loadingStateForInstitute: false, error: action.payload };
        
      default:
        return state;
    }
  };
  
  export default getInstituteNameReducer;
  