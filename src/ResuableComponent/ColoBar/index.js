import React from "react";
import "./ColorBar.scss";

const ColorBar = () => {
  const ranges = [
    "<10%",
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    ">90%",
  ];

  const getBackgroundColor = (index) => {
    if (index === 0) return "#da9da2"; 
    if (index === 1) return "#f6b1ad";
    if (index === 2) return "#f7bca8"; 
    if (index === 3) return "#fad59e"; 
    if (index === 4) return "#fce2b1"; 
    if (index === 5) return "#fff39e"; 
    if (index === 6) return "#f2f19d"; 
    if (index === 7) return "#d6e7aa"; 
    if (index === 8) return "#b4deb1"; 
    if (index === 9) return "#9ed3b2"; 
  };

  return (
    <div className="color-bar">
      {ranges.map((label, index) => (
        <div
          key={index}
          className="color-segment"
          style={{
            backgroundColor: getBackgroundColor(index), // Adjusted to 48% for a slightly darker shade
          }}
        >
          <span
            className="position-absolute"
            style={{
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "24px",
              bottom: "-24px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ColorBar;
