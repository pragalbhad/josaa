import axios from 'axios';
import {
  GET_RECOMMENDATIONS_REQUEST,
  GET_RECOMMENDATIONS_SUCCESS,
  GET_RECOMMENDATIONS_FAILURE,
  GET_RECOMMENDED_COLLEGE_REQUEST,
  GET_RECOMMENDED_COLLEGE_SUCCESS,
  GET_RECOMMENDED_COLLEGE_FAILURE,
} from '../types';

export const getRecommendations = (payload) => {
  return async (dispatch) => {
    dispatch({ type: GET_RECOMMENDATIONS_REQUEST });

    try {
      const url = `${process.env.REACT_APP_BASE_URL}get_recommendations.php`;

      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      dispatch({
        type: GET_RECOMMENDATIONS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_RECOMMENDATIONS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const getRecommendedCollege = (payload) => {
  return async (dispatch) => {
    dispatch({ type: GET_RECOMMENDED_COLLEGE_REQUEST });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/get_recommended_college.php`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      dispatch({
        type: GET_RECOMMENDED_COLLEGE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_RECOMMENDED_COLLEGE_FAILURE,
        payload: error.message,
      });
    }
  };
};
