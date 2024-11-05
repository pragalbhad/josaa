import axios from 'axios';
import {
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILURE
} from '../types';

export const getBlog = () => {
  return async (dispatch) => {
    dispatch({ type: GET_BLOG_REQUEST });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}get_blog.php?id=1`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
            'Content-Type': 'application/json',
          },
          data: {
            Institute: [{ id: '76' }],
            AcademicProgramName: [{ id: '192' }, { id: '10' }],
            Quota: [{ id: '2' }],
            SeatType: [{ id: '13' }],
            Gender: [{ id: '2' }]
          }
        }
      );
      dispatch({ type: GET_BLOG_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_BLOG_FAILURE,
        error: error.response ? error.response.data : 'Network Error'
      });
    }
  };
};
