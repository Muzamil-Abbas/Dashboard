// src/ToggleButton.js
import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ toggleSidebar }) => {
  return (
    <button className="toggle-button" onClick={toggleSidebar}>
      ☰
    </button>
  );
};

export default ToggleButton;
