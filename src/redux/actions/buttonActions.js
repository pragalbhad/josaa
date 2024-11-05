import { TOGGLE_SIGNUP_MODAL, TOGGLE_SIGNIN_MODAL } from "../types";

export const toggleSignUpModal = (isOpen) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_SIGNUP_MODAL,
            payload: isOpen, // Use the passed value
        });
    };
};

export const toggleSignIn = (isOpenSignInModal) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_SIGNIN_MODAL,
            payload: isOpenSignInModal, // Use the passed value
        });
    };
};