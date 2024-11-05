import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  TOGGLE_SIGNIN_MODAL,
  LOGOUT,
} from "../types";
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../types";
import {
  showErrorToast,
  showSuccessToast,
} from "../../ResuableComponent/ToasterNotification";
import { getProfile } from "./getProfileAction";

export const registerUser = (requestBody) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });

  try {
    const url = `${process.env.REACT_APP_BASE_URL}registration.php`;
    const response = await axios.post(url, requestBody, {
      headers: { "Content-Type": "application/json" },
    });

    const token = response.data?.data?.token;
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: { data: response.data, token },
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILURE",
      payload: error.message,
    });
  }
};

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const url = `${process.env.REACT_APP_BASE_URL}login.php`;
    const response = await axios.post(
      url,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    const successMessage = response?.message || "Login successful!";

    const token = response?.data?.data?.token;

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { data: response.data, token },
    });

    localStorage.setItem("authToken", response?.data?.data?.token )
    showSuccessToast(successMessage);

    dispatch({
      type: TOGGLE_SIGNIN_MODAL,
      payload: false,
    });

  } catch (error) {
    const errorMessage =
      error?.message || "Login failed. Please check your credentials.";
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.message,
    });

    showErrorToast(errorMessage);
  }
};


export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('authToken');
    dispatch({ type: LOGOUT });
  };
};
