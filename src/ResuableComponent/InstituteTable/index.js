import React from "react";
import "./InstituteTable.scss";

const InstituteTable = ({ data }) => (
  <table className="institute-table">
    <thead>
      <tr>
        <th>INSTITUTE</th>
        <th>PROGRAM</th>
        <th>NIRF Rank</th>
        <th>Closing Rank (2023)</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr
          key={index}
          style={{
            backgroundColor: getChanceColor(row.chance),
            color: getChanceTextColor(row.chance),
          }}
        >
          <td>{row.institute}</td>
          <td>{row.program}</td>
          <td>{row.nirfRank}</td>
          <td className="chance-cell">{row.chance}%</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const getChanceColor = (chance) => {
    if (chance < 10) return "#E00000"; // Slightly lighter red
    if (chance < 30) return "#FFCF9F"; // Slightly lighter light orange
    if (chance < 50) return "#FFEB9F"; // Slightly lighter yellow
    if (chance < 70) return "#80FF20"; // Slightly lighter light green
    if (chance < 90) return "#4DE820"; // Slightly lighter green
    return "#36C977"; // Slightly lighter dark green
  };
  

// Helper function to convert hex color to HSL
function hexToHsl(hex) {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
  
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
  
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  
  // Helper function to convert HSL back to hex
  function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }
  
  // Function to darken a color by reducing its lightness
  function darkenHexColor(hex, percent) {
    let [h, s, l] = hexToHsl(hex);
    l = Math.max(0, l - percent); // Decrease lightness
    return hslToHex(h, s, l);
  }
  
  // Updated getChanceTextColor function with darker colors
  const getChanceTextColor = (chance) => {
    if (chance < 10) return darkenHexColor("#C60000", 20); // Darken Red
    if (chance < 30) return darkenHexColor("#f8c291", 20); // Darken Light Orange
    if (chance < 50) return darkenHexColor("#f7dc6f", 20); // Darken Yellow
    if (chance < 70) return darkenHexColor("#65E113", 20); // Darken Light Green
    if (chance < 90) return darkenHexColor("#34C80F", 20); // Darken Green
    return darkenHexColor("#27ae60", 20); // Darken Dark Green
  };
  

export default InstituteTable;
