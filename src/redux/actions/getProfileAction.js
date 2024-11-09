// actions/userActions.js
import axios from "axios";
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from "../types";

export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });

  try {
    const url = `${process.env.REACT_APP_BASE_URL}get_profile.php`;
    
    const token  = localStorage.getItem("authToken") || process.env.REACT_APP_TOKEN

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error.message || "Failed to fetch profile data.",
    });
  }
};
