import axios from 'axios';
import {
  GET_COLLEGE_TRENDS_REQUEST,
  GET_COLLEGE_TRENDS_SUCCESS,
  GET_COLLEGE_TRENDS_FAILURE,
} from '../types';

export const getCollegeTrends = () => async (dispatch) => {
  dispatch({ type: GET_COLLEGE_TRENDS_REQUEST });

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}get_college_trends.php`,
      {
        Institute: [{ id: '76' }],
        AcademicProgramName: [{ id: '192' }, { id: '10' }],
        Quota: [{ id: '2' }],
        SeatType: [{ id: 1 }],
        Gender: [{ id: 'Female' }],
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          'Content-Type': 'application/json',
        },
      }
    );

    dispatch({
      type: GET_COLLEGE_TRENDS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COLLEGE_TRENDS_FAILURE,
      payload: error.message,
    });
  }
};
