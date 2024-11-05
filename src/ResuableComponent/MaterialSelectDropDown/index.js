import React from "react";
import './index.scss'

const MaterialStyledSelect = ({ label, name, value, onChange, options, isInvalid, error }) => {
  return (
    <div className="material-select-dropdown">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={value} onChange={onChange}>
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>

      {isInvalid && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default MaterialStyledSelect;
