import {
    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,
  } from "../types";
  
  const initialState = {
    profile: null,
    loadingStateForGetProfile: false,
    error: null,
  };
  
  const getProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PROFILE_REQUEST:
        return {
          ...state,
          loadingStateForGetProfile: true,
          error: null,
        };
      case GET_PROFILE_SUCCESS:
        return {
          ...state,
          loadingStateForGetProfile: false,
          profile: action.payload,
          error: null,
        };
      case GET_PROFILE_FAILURE:
        return {
          ...state,
          loadingStateForGetProfile: false,
          profile: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getProfileReducer;
  