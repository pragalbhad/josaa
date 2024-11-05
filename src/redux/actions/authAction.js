import { LOGOUT } from "../types";

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("authToken");

  dispatch({ type: LOGOUT });
};