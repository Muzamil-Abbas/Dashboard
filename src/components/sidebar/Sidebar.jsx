

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt, FaBoxOpen, FaFileAlt, FaCog, FaUserFriends, FaBell, FaTools,
  FaVirus, FaQuestionCircle, FaChevronDown, FaEllipsisV, FaComments, FaSignOutAlt
} from 'react-icons/fa';
import profile from '../../assets/images/profile-image.png';
import logo from '../../assets/images/logo.png';
import '../../styles/Sidebar.css';
import Footer from '../Footer/Footer';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const [isReportsOpen, setReportsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'inventory') {
      setInventoryOpen(!isInventoryOpen);
    } else if (dropdown === 'reports') {
      setReportsOpen(!isReportsOpen);
    }
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleMenuItemClick = () => {
    setShowProfileMenu(false);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'show' : 'hide'}`}>
      <NavLink to="/" className="logo-link" onClick={toggleSidebar}>
        <div className="logo-container">
          <img src={logo} alt="Pharma One Logo" className="logo" />
          <h1 className="heading">Pharmacy</h1>
        </div>
      </NavLink>
      <div className="profile-container">
        <img src={profile} alt="profile" className="profile-image" />
        <div className="profile-details">
          <h3>Subash</h3>
          <span>Super Admin</span>
        </div>
        <FaEllipsisV className="profile-dots" onClick={toggleProfileMenu} />
        {showProfileMenu && (
          <div className="profile-menu show">
            <a href="#profile" className="profile-menu-item" onClick={handleMenuItemClick}>
              <FaUserFriends className="profile-menu-icon" /> Profile
            </a>
            <a href="#logout" className="profile-menu-item" onClick={handleMenuItemClick}>
              <FaSignOutAlt className="profile-menu-icon" /> Logout
            </a>
          </div>
        )}
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaTachometerAlt className='icon' /> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/inventory"
              onClick={() => {
                toggleDropdown('inventory');
                toggleSidebar();
              }}
              className={`dropdown-toggle ${isInventoryOpen ? 'open' : ''}`}
            >
              <FaBoxOpen className='icon' /> Inventory <FaChevronDown className='chevron-down' />
            </NavLink>
            {isInventoryOpen && (
              <ul className="aside-dropdown-menu open">
                <li><NavLink to="/list" activeClassName="active" onClick={toggleSidebar}>List of Medicines</NavLink></li>
                <li><NavLink to="/medicinegroup" activeClassName="active" onClick={toggleSidebar}>Medicines Groups</NavLink></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <NavLink
              to="/reports"
              onClick={() => {
                toggleDropdown('reports');
                toggleSidebar();
              }}
              className={`dropdown-toggle ${isReportsOpen ? 'open' : ''}`}
            >
              <FaFileAlt className='icon' /> Reports <FaChevronDown className='chevron-down' />
            </NavLink>
            {isReportsOpen && (
              <ul className="aside-dropdown-menu open">
                <li><NavLink to="/salesreport" activeClassName="active" onClick={toggleSidebar}>Sales Report</NavLink></li>
                <li><NavLink to="/paymentsreport" activeClassName="active" onClick={toggleSidebar}>Payments Report</NavLink></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <NavLink to="/configurations" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaCog className='icon' /> Configurations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact-management" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaUserFriends className='icon' /> Contact Management
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/notifications" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaBell className='icon' /> Notifications
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/chat-with-visitors" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaComments className='icon' /> Chat with Visitors
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/application-settings" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaTools className='icon' /> Application Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/covid-19" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaVirus className='icon' /> Covid-19
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/get-technical-help" activeClassName="active" className="nav-link" onClick={toggleSidebar}>
              <FaQuestionCircle className='icon' /> Get Technical Help
            </NavLink>
          </li>
        </ul>
      </nav>
      <Footer />
    </div>
  );
};

export default Sidebar;
