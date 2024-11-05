import axios from 'axios';
import {
  GET_EXAMS_REQUEST,
  GET_EXAMS_SUCCESS,
  GET_EXAMS_FAILURE
} from '../types';

export const getExams = () => {
  return async (dispatch) => {
    dispatch({ type: GET_EXAMS_REQUEST });
    try {
      const url = `${process.env.REACT_APP_BASE_URL}get_exams.php`;
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
  
      dispatch({
        type: GET_EXAMS_SUCCESS,
        payload: response.data,
      });
    }catch (error) {
      dispatch({
        type: GET_EXAMS_FAILURE,
        error: error.response ? error.response.data : 'Network Error'
      });
    }
  };
};
