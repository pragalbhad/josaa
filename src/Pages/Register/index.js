import React, { useState } from "react";
import axios from "axios";
import { Form, Button, InputGroup } from "react-bootstrap";
import CustomModal from "../../ResuableComponent/CustomModal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignIn, toggleSignUpModal } from "../../redux/actions/buttonActions";
import MaterialStyledInput from "../../ResuableComponent/MaterialStyledInput";
import MaterialStyledSelect from "../../ResuableComponent/MaterialSelectDropDown";
import "../../components/Header/Header.scss";
import { registerUser } from "../../redux/actions/registerAction";
import GlobalLoader from "../../ResuableComponent/GloaderLoader";
import { getProfile } from "../../redux/actions/getProfileAction";

function Register() {
  const isSignUpModalOpen = useSelector(
    (state) => state.buttonReducer.isSignUpModalOpen
  );
  
  const loadingStateForSignUp = useSelector(
    (state) => state.register.loadingStateForSignUp
  );
  
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    seat_type: "",
    state: "",
    city: "",
    gender: "",
    know_from: "",
    password: "",
    confirm_password: "",
    accept_terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear error on input change
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) newErrors.email = "Email is required";

    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.mobile) newErrors.mobile = "Phone is required";

    else if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit phone number";

    if (!formData.seat_type) newErrors.seat_type = "Seat Type is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.know_from) newErrors.know_from = "This field is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else {
      // Detailed password validations
      const passwordErrors = [];
      if (formData.password.length < 8)
        passwordErrors.push("Password must be at least 8 characters");
      if (!/[A-Z]/.test(formData.password))
        passwordErrors.push(
          "Password must contain at least one uppercase letter"
        );
      if (!/[a-z]/.test(formData.password))
        passwordErrors.push(
          "Password must contain at least one lowercase letter"
        );
      if (!/[0-9]/.test(formData.password))
        passwordErrors.push("Password must contain at least one number");
      if (!/[!@#$%^&*]/.test(formData.password))
        passwordErrors.push(
          "Password must contain at least one special character"
        );

      if (passwordErrors.length > 0) {
        newErrors.password = passwordErrors.join("\n");
      }
    }

    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    if (!formData.accept_terms)
      newErrors.accept_terms = "You must accept the terms and conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
      await dispatch(registerUser(formData));
      toggleSignUpModal(false)
    }
  };

  const handleClose = () => {
    dispatch(toggleSignUpModal(false));
  };

  const handleLogin = () => {
    
    dispatch(toggleSignUpModal(false))
    dispatch(toggleSignIn(true))
    dispatch(getProfile());
  }

  return (
    <CustomModal
      isOpen={isSignUpModalOpen}
      title="Create an account"
      subTitle="Let's get started!"
      onClose={handleClose}
    >
      <Form style={{ maxWidth: "400px", margin: "auto" }}>
        <MaterialStyledInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          isInvalid={!!errors.name}
        />

        <MaterialStyledInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          isInvalid={!!errors.email}
        />

        <MaterialStyledInput
          label="Phone"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          error={errors.mobile}
          isInvalid={!!errors.mobile}
        />

        <MaterialStyledSelect
          label="Seat Type"
          name="seat_type"
          value={formData.seat_type}
          onChange={handleChange}
          options={[
            { label: "General", value: "General" },
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ]}
          error={errors.seat_type}
          isInvalid={!!errors.seat_type}
        />

        <MaterialStyledSelect
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          options={[
            { label: "Gurgaon", value: "Gurgaon" },
            { label: "Delhi", value: "Delhi" },
            { label: "Noida", value: "Noida" },
            { label: "Patna", value: "Patna" },
            { label: "Greader Noida", value: "Greader Noida" },
          ]}
          error={errors.state}
          isInvalid={!!errors.state}
        />

        <MaterialStyledSelect
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          options={[
            { label: "Gurgaon", value: "Gurgaon" },
            { label: "Delhi", value: "Delhi" },
            { label: "Noida", value: "Noida" },
            { label: "Patna", value: "Patna" },
            { label: "Greader Noida", value: "Greader Noida" },
          ]}
          error={errors.city}
          isInvalid={!!errors.city}
        />

        <MaterialStyledSelect
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
          error={errors.gender}
          isInvalid={!!errors.gender}
        />

        <MaterialStyledSelect
          label="How do you know about JOSAA HELP?"
          name="know_from"
          value={formData.know_from}
          onChange={handleChange}
          options={[
            { label: "Friends", value: "Friends" },
            { label: "Social Media", value: "Social Media" },
            { label: "Google Search", value: "Google Search" },
            { label: "Other", value: "Other" },
          ]}
          error={errors.know_from}
          isInvalid={!!errors.know_from}
        />

        <MaterialStyledInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          isInvalid={!!errors.password}
          type="password"
        />

        <MaterialStyledInput
          label="Confirm Password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          error={errors.confirm_password}
          isInvalid={!!errors.confirm_password}
          type="password"
        />

        <Form.Check
          type="checkbox"
          label={
            <span>
              I agree that I have read the{" "}
              <span className="text-decoration-underline">privacy policy</span>
            </span>
          }
          name="accept_terms"
          checked={formData.accept_terms}
          onChange={handleChange}
          isInvalid={!!errors.accept_terms}
          className="mt-3"
        />

        <button onClick={handleSubmit} className="register-btn w-100 mt-4">
          Register
        </button>

        <div className="d-flex gap-2 text-center w-100 justify-content-center mt-4 ">Already have an account? <div className="login-text fw-bold cursor-pointer" onClick={handleLogin}>Login</div></div>
      </Form>

      {loadingStateForSignUp && <GlobalLoader />}
    </CustomModal>
  );
}

export default Register;