import axios from 'axios';
import {
  GET_INSTITUTES_REQUEST,
  GET_INSTITUTES_SUCCESS,
  GET_INSTITUTES_FAILURE
} from './actionTypes';

export const getInstitutes = ({exam_name}) => {
  return async (dispatch) => {
    dispatch({ type: GET_INSTITUTES_REQUEST });
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}get_institutes_data.php`,
        {
          exam_name: exam_name
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
          }
        }
      );
      dispatch({ type: GET_INSTITUTES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_INSTITUTES_FAILURE,
        error: error.response ? error.response.data : 'Network Error'
      });
    }
  };
};
