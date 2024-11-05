import axios from "axios";
import {
  GET_INSTITUTE_REQUEST,
  GET_INSTITUTE_SUCCESS,
  GET_INSTITUTE_FAILURE,
} from "../types";

export const getInstituteData = () => async (dispatch) => {
  dispatch({ type: GET_INSTITUTE_REQUEST });
  
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/get_institutes_data.php`, {
      exam_name: "Mains",
    });

    dispatch({
      type: GET_INSTITUTE_SUCCESS,
      payload: response.data.instituteData, 
    });
  } catch (error) {
    dispatch({
      type: GET_INSTITUTE_FAILURE,
      payload: error.message,
    });
  }
};
