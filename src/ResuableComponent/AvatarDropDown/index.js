import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import './AvatarDropDown.scss';

function AvatarDropdown({ menuOptions, onOptionSelect, onClick }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <Dropdown
      show={showMenu}
      onToggle={() => setShowMenu(!showMenu)}
      align="end" // Aligns to the bottom-left when the dropdown is open
    >
      {/* Custom div as the dropdown toggle to avoid default arrow */}
      <div
        onClick={toggleMenu}
        style={{
          backgroundColor: '#0078D4', // Blue background color
          borderRadius: '50%', // Circle shape
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <CiUser color="#fff" size="24px" /> {/* Avatar Icon */}
      </div>

      <Dropdown.Menu
        className="custom-dropdown-menu"
        align="end" // Ensures dropdown aligns to the left
      >
        {menuOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              onOptionSelect(option);
              setShowMenu(false); // Close menu on select
            }}
            href={option.link || '#'}
            className="d-flex flex-row gap-3 align-center px-4 avatar-drop-down-item"
          >
            <div className='avatar-drop-down-icon'>{option.startIcon}</div>
            <div>{option.label}</div>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AvatarDropdown;
