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
            backgroundColor: getChanceColor(row.chance, index),
            color: getChanceTextColor(row.chance, index),
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

const colors = [
  "#da9da2", "#f6b1ad", "#f7bca8", "#fad59e", "#fce2b1",
  "#fff39e", "#f2f19d", "#d6e7aa", "#b4deb1", "#9ed3b2"
];

const getChanceColor = (chance, index) => {
  if (chance >= 20 && chance < 30) return colors[1];
  if (chance >= 30 && chance < 40) return colors[2];
  if (chance >= 40 && chance < 50) return colors[3];
  if (chance >= 50 && chance < 60) return colors[4];
  if (chance >= 60 && chance < 70) return colors[5];
  if (chance >= 70 && chance < 80) return colors[6];
  if (chance >= 80 && chance < 90) return colors[7];
  if (chance >= 90 && chance <= 100) return colors[8];
  
  return colors[index % colors.length];
};

const getChanceTextColor = (chance, index) => {
  const backgroundColor = getChanceColor(chance, index);
  return darkenHexColor(backgroundColor, 20); // Darken each color for better text contrast
};

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

function darkenHexColor(hex, percent) {
  let [h, s, l] = hexToHsl(hex);
  l = Math.max(0, l - percent); // Decrease lightness
  return hslToHex(h, s, l);
}

export default InstituteTable;
