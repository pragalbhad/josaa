import React, { useState } from 'react';
import './ToggleButton.scss';

const ToggleButton = () => {
  const [active, setActive] = useState('MAINS');

  const handleToggle = (option) => {
    setActive(option);
  };

  return (
    <div className="toggle-button">
      <button
        className={active === 'MAINS' ? 'active' : ''}
        onClick={() => handleToggle('MAINS')}
      >
        MAINS (2024)
      </button>
      <button
        className={active === 'ADVANCE' ? 'active' : ''}
        onClick={() => handleToggle('ADVANCE')}
      >
        ADVANCE (2024)
      </button>
    </div>
  );
};

export default ToggleButton;
