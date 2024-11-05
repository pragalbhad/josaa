// src/actions/newsActions.js
import axios from 'axios';

export const fetchNews = () => async (dispatch) => {
  dispatch({ type: 'FETCH_NEWS_REQUEST' });

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}get_news.php`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          'Content-Type': 'application/json'
        },
        data: {
          Institute: [{ id: "76" }],
          AcademicProgramName: [{ id: "192" }, { id: "10" }],
          Quota: [{ id: "2" }],
          SeatType: [{ id: "13" }],
          Gender: [{ id: "2" }]
        }
      }
    );

    dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_NEWS_FAILURE', error: error.message });
  }
};
