// reducer.js
import {
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAILURE
  } from '../types';
  
  const initialState = {
    loadingStateForBlog: false,
    blogData: null,
    error: null
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BLOG_REQUEST:
        return {
          ...state,
          loadingStateForBlog: true,
          error: null
        };
      case GET_BLOG_SUCCESS:
        return {
          ...state,
          loadingStateForBlog: false,
          blogData: action.payload
        };
      case GET_BLOG_FAILURE:
        return {
          ...state,
          loadingStateForBlog: false,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default blogReducer;
  