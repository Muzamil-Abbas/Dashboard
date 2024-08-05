import React from 'react';
import BoxContainer from '../../components/boxcomponent/BoxContainer'; // Adjust path as needed
import { faCapsules, faBandAid, faThermometer } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../components/buttons/CustomButton';
import '../../styles/Inventory.css';


const Inventory = () => {
  const handleAddNew = () => alert('Add New Item Successfully');
  return (
    <div className="inventory-container">
      <div className="heading-container">
        <div className="inventory-heading">
          <h2>Inventory</h2>
          <p>List of medicines available for sales.</p>
        </div>
        <CustomButton
          onClick={handleAddNew}
          className="add-button"
          iconType="add"
        >
          Add New Item
        </CustomButton>
      </div>

      <div className="boxes-container">
        <div className='blue-box-container'>
          <BoxContainer
            icon={faBandAid}
            mainHeading="Good"
            subHeading="Inventory Status"
            paragraphText="View Detailed Report"
          />
        </div>
        <div className='green-box-container'>
          <BoxContainer
            icon={faCapsules}
            mainHeading="Good"
            subHeading="Inventory Status"
            paragraphText="View Detailed Report"
          />
        </div>
        <div className='red-box-container'>
          <BoxContainer
            icon={faThermometer}
            mainHeading="Good"
            subHeading="Inventory Status"
            paragraphText="View Detailed Report"
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;

