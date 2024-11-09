import React, { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import "./EditProfile.scss";
import Button from "../../ResuableComponent/Button";
import { TbRosetteDiscountCheck } from "react-icons/tb";

function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seatType: "",
    state: "",
    city: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleVerifyEmail = () => {
    if (validateEmail(formData.email)) {
      setEmailVerified(true);
    } else {
      setErrors({ email: "Please enter a valid email address" });
    }
  };

  const handleVerifyPhone = () => {
    if (validatePhone(formData.phone)) {
      setPhoneVerified(true);
    } else {
      setErrors({
        phone:
          " Please input your 10-digit Indian phone number without +91 or any leading zero.",
      });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email || !validateEmail(formData.email))
      validationErrors.email = "Please enter a valid email";
    if (!formData.phone || !validatePhone(formData.phone))
      validationErrors.phone = "Please enter a valid 10-digit phone number";
    if (!formData.seatType)
      validationErrors.seatType = "Please select seat type";
    if (!formData.state) validationErrors.state = "Please select a state";
    if (!formData.city) validationErrors.city = "Please select a city";
    if (!formData.gender) validationErrors.gender = "Please select gender";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Container className="edit-profile">
      <h2>Edit Profile</h2>
      <Form className="edit-profile-form" onSubmit={handleSubmit}>
        <Form.Group
          controlId="name"
          className="edit-profile-form-input-container"
        >
          <Form.Label className="edit-profile-form-input-label-text">
            Name
          </Form.Label>
          <div className="d-flex flex-column w-100">
            <Form.Control
              className="edit-profile-form-input-fields"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group
          controlId="email"
          className="edit-profile-form-input-container"
        >
          <Form.Label className="edit-profile-form-input-label-text">
            Email
          </Form.Label>
          <InputGroup>
            <Form.Control
              className="edit-profile-form-input-fields"
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />

            {emailVerified ? (
              <TbRosetteDiscountCheck
                className={`${
                  errors.phone ? "non-verified-icon" : ""
                } verified-icon`}
              />
            ) : (
              <Button
                className="edit-profile-verify-btn"
                onClick={handleVerifyEmail}
                label="Verify"
              />
            )}
            {!emailVerified && (
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            )}
          </InputGroup>
        </Form.Group>

        <Form.Group
          controlId="phone"
          className="edit-profile-form-input-container"
        >
          <Form.Label className="edit-profile-form-input-label-text">
            Phone
          </Form.Label>
          <InputGroup>
            <Form.Control
              className="edit-profile-form-input-fields"
              type="text"
              name="phone"
              placeholder="+91 99999 99999"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />

            {phoneVerified ? (
              <TbRosetteDiscountCheck
                className={`${
                  errors.phone ? "non-verified-icon" : ""
                } verified-icon`}
              />
            ) : (
              <Button
                className="edit-profile-verify-btn"
                onClick={handleVerifyPhone}
                label="Verify"
              />
            )}
            <Form.Control.Feedback type="invalid">
              {!phoneVerified && errors.phone}
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        {/* Dropdowns for seat type, state, city, and gender */}
        <Form.Group
          controlId="seatType"
          className="edit-profile-form-input-container"
        >
          <Form.Label className="edit-profile-form-input-label-text">
            Seat Type *
          </Form.Label>
          <div className="d-flex flex-column w-100">
            <Form.Control
              className="edit-profile-form-input-fields"
              as="select"
              name="seatType"
              value={formData.seatType}
              onChange={handleChange}
              isInvalid={!!errors.seatType}
            >
              <option value="">Select Seat Type</option>
              <option value="EWS">EWS</option>
              <option value="General">General</option>
              {/* Add other options here */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.seatType}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group
          controlId="state"
          className="edit-profile-form-input-container"
        >
          <Form.Label className="edit-profile-form-input-label-text">
            State
          </Form.Label>
          <div className="d-flex flex-column w-100">
            <Form.Control
              className="edit-profile-form-input-fields"
              as="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            >
              <option value="">Select City</option>
              <option value="Adoni">Adoni</option>
              {/* Add other cities here */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group
          controlId="city"
          className="edit-profile-form-input-container"
        >
          <Form.Label className="edit-profile-form-input-label-text">
            City
          </Form.Label>
          <div className="d-flex flex-column w-100">
            <Form.Control
              className="edit-profile-form-input-fields"
              as="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            >
              <option value="">Select City</option>
              <option value="Adoni">Adoni</option>
              {/* Add other cities here */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.city}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group
          className="edit-profile-form-input-container"
          controlId="gender"
        >
          <Form.Label className="edit-profile-form-input-label-text">
            Gender #
          </Form.Label>

          <div className="d-flex flex-column w-100">
            <Form.Control
              className="edit-profile-form-input-fields"
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              isInvalid={!!errors.gender}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              {/* Add other gender options here */}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.gender}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <small className="form-note">
          <span className="fw-bold">NOTE:</span> # this option is related to rank data
        </small>

        <div className="d-flex justify-content-center w-100">
          <Button type="submit" className="update-button" label="Update" />
        </div>
      </Form>
    </Container>
  );
}

export default EditProfile;
