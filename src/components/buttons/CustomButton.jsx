import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faSave, faEdit, faTrashRestore, faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Button.css';


const icons = {
  add: faPlus,
  save: faSave,
  edit: faEdit,
  delete: faTrashRestore,
  download: faChevronDown,
};

const CustomButton = ({
  type = 'button',
  onClick,
  children,
  className = '',
  iconType = 'add',
  disabled = false,
  dropdownItems = [],
  onDropdownClick
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const icon = icons[iconType];

  const handleButtonClick = () => {
    if (dropdownItems.length > 0) {
      setShowDropdown(!showDropdown);
      if (onDropdownClick) onDropdownClick();
    } else {
      if (onClick) onClick();
    }
  };

  return (
    <div className={`button-container ${dropdownItems.length ? 'has-dropdown' : ''}`}>
      <button
        type={type}
        onClick={handleButtonClick}
        className={`custom-button ${className}`}
        disabled={disabled}
      >
        {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
        {children}
      </button>
      {dropdownItems.length > 0 && showDropdown && (
        <div className="dropdown-menu show">
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={item.onClick}
            >
              <FontAwesomeIcon icon={item.icon} className="dropdown-icon" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  iconType: PropTypes.string,
  disabled: PropTypes.bool,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      onClick: PropTypes.func
    })
  ),
  onDropdownClick: PropTypes.func,
};

export default CustomButton;
