import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../../styles/Dashboard.css';

const BoxContainer = ({ icon, mainHeading, subHeading, paragraphText }) => {
  return (
    <div className='box-container'>
      <FontAwesomeIcon icon={icon} className='user-icon' />
      <h3>{mainHeading}</h3>
      <h5>{subHeading}</h5>
      <div className="para">
        <p>{paragraphText}</p>
        <span className='arrow-icon'>&raquo;</span>
      </div>
    </div>
  );
};

BoxContainer.propTypes = {
  icon: PropTypes.object.isRequired,
  mainHeading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
};

export default BoxContainer;
