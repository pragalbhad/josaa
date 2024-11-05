import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Tab.scss";
import { BiChevronRight } from "react-icons/bi";

function TabNavbar({ tabs }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(null);
  const [selectedDropdownLabel, setSelectedDropdownLabel] = useState({}); // Store selected label per tab
  const [dropdownOpen, setDropdownOpen] = useState(null); 

  const handleNavigation = (link, tabLabel, itemLabel = null) => {
    navigate(link);
    setActiveTab(tabLabel);

    if (itemLabel) {
      // Update selected dropdown label per tab
      setSelectedDropdownLabel(prev => ({ ...prev, [tabLabel]: itemLabel }));
    } else {
      setSelectedDropdownLabel(prev => ({ ...prev, [tabLabel]: null })); // Reset if not in dropdown
    }

    setDropdownOpen(null);
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mx-auto navbar-nav">
        {tabs.map((tab, index) =>
          tab.dropdown ? (
            <NavDropdown
              title={selectedDropdownLabel[tab.label] || tab.label} // Show selected label or default
              key={index}
              id={`nav-dropdown-${index}`}
              className={`text-uppercase font-weight-bold cursor-pointer ${
                activeTab === tab.label ? "active" : ""
              }`}
              show={dropdownOpen === tab.label} // Control visibility
              onToggle={() =>
                setDropdownOpen(dropdownOpen === tab.label ? null : tab.label)
              }
            >
              {tab.dropdown.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleNavigation(item.link, tab.label, item.label)}
                  className={`dropdown-item d-flex justify-content-between cursor-pointer ${
                    selectedDropdownLabel[tab.label] === item.label ? "active" : ""
                  }`}
                >
                  <div>{item.label}</div>
                  <div>
                    <BiChevronRight />
                  </div>
                </div>
              ))}
            </NavDropdown>
          ) : (
            <div
              onClick={() => handleNavigation(tab.link, tab.label)}
              key={index}
              className={`nav-link cursor-pointer ${
                location.pathname === tab.link || activeTab === tab.label ? "active" : ""
              }`}
            >
              {tab.label}
            </div>
          )
        )}
      </Nav>
    </Navbar>
  );
}

export default TabNavbar;
