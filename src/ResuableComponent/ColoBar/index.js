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
    "90%",
    ">90%",
  ];

  const getBackgroundColor = (index) => {
    if (index === 0) return "hsl(0, 100%, 48%)"; // Dark red for <10%
    if (index === 1) return "hsl(10, 100%, 48%)"; // Slightly lighter red for 10%
    if (index === 9) return "hsl(90, 100%, 48%)"; // Slightly lighter green for 90%
    if (index === 10) return "hsl(120, 100%, 48%)"; // Dark green for >90%
    return `hsl(${(index / (ranges.length - 1)) * 120}, 100%, 48%)`; // Gradual colors for the rest
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
