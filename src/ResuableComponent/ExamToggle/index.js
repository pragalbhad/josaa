import React, { useState } from 'react';
import './ExamToggle.scss';

const ExamToggle = ({ options, onToggle }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleToggle = (option) => {
    setSelected(option);
    onToggle(option);
  };

  return (
    <div className="exam-toggle">
      {options.map((option) => (
        <button
          key={option}
          className={`toggle-button ${selected === option ? 'active' : ''}`}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ExamToggle;
