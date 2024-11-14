import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import CustomModal from "../../ResuableComponent/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSignIn,
  toggleSignUpModal,
} from "../../redux/actions/buttonActions";
import MaterialStyledInput from "../../ResuableComponent/MaterialStyledInput";
import { loginUser } from "../../redux/actions/registerAction";
import GlobalLoader from "../../ResuableComponent/GloaderLoader";
import { getProfile } from "../../redux/actions/getProfileAction";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: false,
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const isOpenSignInModal = useSelector(
    (state) => state?.buttonReducer?.isOpenSignInModal
  );

  const token = useSelector((state) => state?.register?.data?.token);

  const loadingStateForSignIn = useSelector(
    (state) => state?.register.loadingStateForSignIn
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
  
    const passwordErrors = [];
  
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      if (formData.password.length < 8)
        passwordErrors.push("Password must be at least 8 characters");
      if (!/[A-Z]/.test(formData.password))
        passwordErrors.push("Password must contain at least one uppercase letter");
      if (!/[a-z]/.test(formData.password))
        passwordErrors.push("Password must contain at least one lowercase letter");
      if (!/[0-9]/.test(formData.password))
        passwordErrors.push("Password must contain at least one number");
      if (!/[!@#$%^&*]/.test(formData.password))
        passwordErrors.push("Password must contain at least one special character");
  
      if (passwordErrors.length > 0) {
        newErrors.password = passwordErrors.join("\n");
      }
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        loginUser(formData.email, formData.password, formData.rememberMe)
      );
    }
  };

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, [dispatch, token]);

  const handleClose = () => {
    dispatch(toggleSignUpModal(false));
    dispatch(toggleSignIn(false));
  };

  const handleRegister = () => {
    dispatch(toggleSignUpModal(true));
    dispatch(toggleSignIn(false));
  };

  return (
    <CustomModal
      isOpen={isOpenSignInModal}
      title="Login to your account"
      subTitle="Let's get started!"
      onClose={handleClose}
    >
      <Form style={{ maxWidth: "400px", margin: "auto" }}>
        <MaterialStyledInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          isInvalid={!!errors.email}
        />

        <MaterialStyledInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          isInvalid={!!errors.password}
          type="password"
          FormHelperTextProps={{
            className: "material-error-message",
          }}
        />

        <Form.Check
          type="checkbox"
          label="Keep me logged in"
          name="remember_me"
          checked={formData.remember_me}
          onChange={handleChange}
          isInvalid={!!errors.remember_me}
          className="mt-3 remember-me"
        />
        {errors.remember_me && (
          <div className="text-danger">{errors.remember_me}</div>
        )}

        <button onClick={handleSubmit} className="register-btn w-100 mt-4">
          Login
        </button>
        <div className="d-flex gap-2 text-center w-100 justify-content-center mt-4 ">
          Don't have an account?{" "}
          <div
            className="login-text fw-bold cursor-pointer"
            onClick={handleRegister}
          >
            Register
          </div>
        </div>
      </Form>

      {loadingStateForSignIn && <GlobalLoader />}
    </CustomModal>
  );
}

export default Login;
