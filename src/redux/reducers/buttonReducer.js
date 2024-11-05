import { TOGGLE_SIGNIN_MODAL, TOGGLE_SIGNUP_MODAL } from "../types";

const initialState = {
  isSignUpModalOpen: false,
  isOpenSignInModal: false,
};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGNUP_MODAL:
      return {
        ...state,
        isSignUpModalOpen: action.payload,
      };
    case TOGGLE_SIGNIN_MODAL:
      return {
        ...state,
        isOpenSignInModal: action.payload,
      };
    default:
      return state;
  }
};

export default buttonReducer;
