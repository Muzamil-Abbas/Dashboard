import React from 'react';
import '../../styles/Header.css';

const Header = ({ title, subtitle }) => (
  <div className="header">
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </div>
);

export default Header;
