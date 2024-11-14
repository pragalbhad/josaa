// src/reducers/siteAccessLogReducer.js
import {
    GET_SITE_ACCESS_LOGS_REQUEST,
    GET_SITE_ACCESS_LOGS_SUCCESS,
    GET_SITE_ACCESS_LOGS_FAILURE,
  } from '../types';
  
  const initialState = {
    loadingStateForSiteAccessLogs: false,
    siteAccessLogs: [],
    error: '',
  };
  
  const siteAccessLogReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SITE_ACCESS_LOGS_REQUEST:
        return {
          ...state,
          loadingStateForSiteAccessLogs: true,
          error: '',
        };
      case GET_SITE_ACCESS_LOGS_SUCCESS:
        return {
          ...state,
          loadingStateForSiteAccessLogs: false,
          siteAccessLogs: action.payload,
        };
      case GET_SITE_ACCESS_LOGS_FAILURE:
        return {
          ...state,
          loadingStateForSiteAccessLogs: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default siteAccessLogReducer;
  