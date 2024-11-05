import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import "./index.scss";

const MaterialStyledInput = ({
  label,
  value,
  onChange,
  name,
  type = "text",
  isInvalid,
  error
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`material-input ${focused || value ? "focused" : ""}`}>
        <Form.Control
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=" "
          isInvalid={isInvalid}
        />
        {type === "password" && (
          <InputGroup.Text
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          >
            {showPassword ? <TbEyeClosed /> : <FaEye />}
          </InputGroup.Text>
        )}
        <label>{label}</label>
        {isInvalid && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default MaterialStyledInput;
