import React, { useState } from 'react';
import { faHeartCirclePlus, faSackDollar, faMagnifyingGlassPlus, faDiagnoses, faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import BoxContainer from '../../components/boxcomponent/BoxContainer';
import MedicineComponent from '../../components/statscomponent/MedicineComponent';
import CustomButton from '../../components/buttons/CustomButton';
import '../../styles/Dashboard.css';

const Home = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDownloadDropdownToggle = () => setDropdownVisible(!dropdownVisible);

  const downloadDropdownItems = [
    { label: 'Excel', icon: faFileExcel, onClick: () => { alert('Download Excel'); setDropdownVisible(false); } },
    { label: 'PDF', icon: faFilePdf, onClick: () => { alert('Download PDF'); setDropdownVisible(false); } }
  ];

  return (
    <>
      <div className='first-section'>
        <div className="container">
          <div className="dashboard-heading">
            <h2>Dashboard</h2>
            <p>A quick data overview of the inventory.</p>
          </div>
          <CustomButton
            onClick={handleDownloadDropdownToggle}
            className="select-button"
            iconType="download"
            dropdownItems={dropdownVisible ? downloadDropdownItems : []}
          >
            Download Report
          </CustomButton>
        </div>

        <div className="boxes-container">
          <div className='green-box-container'>
            <BoxContainer
              icon={faHeartCirclePlus}
              mainHeading="Good"
              subHeading="Inventory Status"
              paragraphText="View Detailed Report"
            />
          </div>
          <div className='yello-box-container'>
            <BoxContainer
              icon={faSackDollar}
              mainHeading="Rs. 8,55,875"
              subHeading="Revenue : Jan 2022"
              paragraphText="View Detailed Report"
            />
          </div>
          <div className='blue-box-container'>
            <BoxContainer
              icon={faMagnifyingGlassPlus}
              mainHeading="298"
              subHeading="Medicines Available"
              paragraphText="View Detailed Report"
            />
          </div>
          <div className='red-box-container'>
            <BoxContainer
              icon={faDiagnoses}
              mainHeading="01"
              subHeading="Medicine Shortage"
              paragraphText="View Detailed Report"
            />
          </div>
        </div>
      </div>

      <div className='second-section'>
        <MedicineComponent
          title="Inventory Overview"
          configLink="/inventory"
          configText="View Inventory"
          totalMedicines={298}
          groups={24}
          totalMedicinesLabel="Total Medicines"
          groupsLabel="Medicine Groups"
        />
        <MedicineComponent
          title="Quick Report"
          configLink="/report"
          configText="View Report"
          totalMedicines={70856}
          groups={5288}
          totalMedicinesLabel="Qty of Medicines Sold"
          groupsLabel="Invoices Generated"
        />
        <MedicineComponent
          title="Stock Analysis"
          configLink="/analysis"
          configText="View Analysis"
          totalMedicines={15}
          groups={30}
          totalMedicinesLabel="Total no of Suppliers"
          groupsLabel="Total no of Users"
        />
        <MedicineComponent
          title="Daily Overview"
          configLink="/overview"
          configText="View Daily Overview"
          totalMedicines={845}
          groups={"Adalimumab"}
          totalMedicinesLabel="Total no of Customers"
          groupsLabel="Frequently bought Item"
        />
      </div>
    </>
  );
};

export default Home;
