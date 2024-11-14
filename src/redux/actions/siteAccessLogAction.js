import axios from 'axios';
import {
  GET_SITE_ACCESS_LOGS_REQUEST,
  GET_SITE_ACCESS_LOGS_SUCCESS,
  GET_SITE_ACCESS_LOGS_FAILURE,
} from '../types';

export const getSiteAccessLogs = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_SITE_ACCESS_LOGS_REQUEST });

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/add_site_log.php`,
        { ip_address: id }
      );

      dispatch({
        type: GET_SITE_ACCESS_LOGS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_SITE_ACCESS_LOGS_FAILURE,
        payload: error.message,
      });
    }
  };
};
