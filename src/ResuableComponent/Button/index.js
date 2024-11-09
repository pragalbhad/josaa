import React from "react";

const Button = ({ label, className, startIcon, endIcon, style, onClick }) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      <span className="mr-1">{startIcon}</span>
      {label}
    </button>
  );
};

export default Button;
