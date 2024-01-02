// Dropdown2.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'

const Dropdown2 = ({ isOpen, handleDropdown, items }) => {
  return (
    <div className={isOpen ? 'dropdown-menu active' : 'dropdown-menu'} onMouseLeave={handleDropdown}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown2;
