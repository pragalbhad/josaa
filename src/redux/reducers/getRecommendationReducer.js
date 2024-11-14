// src/reducers/recommendationReducer.js
import {
    GET_RECOMMENDATIONS_REQUEST,
    GET_RECOMMENDATIONS_SUCCESS,
    GET_RECOMMENDATIONS_FAILURE,
  } from '../types';
  
  const initialState = {
    loadingStateForRecommendation: false,
    recommendations: [],
    error: '',
  };
  
  const recommendationReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_RECOMMENDATIONS_REQUEST:
        return {
          ...state,
          loadingStateForRecommendation: true,
          error: '',
        };
      case GET_RECOMMENDATIONS_SUCCESS:
        return {
          ...state,
          loadingStateForRecommendation: false,
          recommendations: action.payload,
        };
      case GET_RECOMMENDATIONS_FAILURE:
        return {
          ...state,
          loadingStateForRecommendation: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default recommendationReducer;
  
  