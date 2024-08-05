import React from 'react'
import PropTypes from 'prop-types';


const InventoryComponent = ({
  title,
  configLink,
  configText,
  totalMedicines,
  groups,
  totalMedicinesLabel,
  groupsLabel
}) => {
  return (
    <div className="medicine-component">
      <div className="links">
        <h4>{title}</h4>
        <a href={configLink} className="config-link">
          {configText}
          <span className='arrow-icon'>&raquo;</span>
        </a>
      </div>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-number">{totalMedicines}</span>
          <span className="stat-label">{totalMedicinesLabel}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{groups}</span>
          <span className="stat-label">{groupsLabel}</span>
        </div>
      </div>
    </div>
  );
};

InventoryComponent.propTypes = {
  title: PropTypes.string.isRequired,
  configLink: PropTypes.string.isRequired,
  configText: PropTypes.string.isRequired,
  totalMedicines: PropTypes.number.isRequired,
  groups: PropTypes.number.isRequired,
  totalMedicinesLabel: PropTypes.string.isRequired,
  groupsLabel: PropTypes.string.isRequired
};



export default InventoryComponent
