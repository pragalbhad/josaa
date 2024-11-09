import React, { useState, useRef } from 'react';
import './FilterDropdown.scss';
import { FaCheck } from "react-icons/fa";

const FilterDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log('%cMyProject%cline:10%cisOpen', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(34, 8, 7);padding:3px;border-radius:2px', isOpen)
  };
  

  const handleSelect = (option) => {
    onSelect(option);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-filter" ref={dropdownRef}>
      <button className="dropdown-button" onClick={handleToggle}>
        Filter
      </button>
      {isOpen && (
        <div className="filter-dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className={`filter-dropdown-item d-flex justify-content-between ${option === selected ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              <div>{option}</div>
              {option === selected && <div><FaCheck /></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
