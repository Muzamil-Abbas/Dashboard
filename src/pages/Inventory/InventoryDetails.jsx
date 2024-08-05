import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/InventoryList.css';
import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../components/buttons/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar'

const InventoryDetails = () => {
  const handleAddNew = () => alert('Add New Item Successfully');

  const handleSelect = () => alert('Select Group Successfully');

  const medicines = [
    { id: 'D06ID232435454', name: 'Augmentin 625 Duo Tablet', group: 'Generic Medicine', stock: 350, link: 'View Full Detail >>' },
    { id: 'D06ID232435451', name: 'Azithral 500 Tablet', group: 'Generic Medicine', stock: 20, link: 'View Full Detail >>' },
    { id: 'D06ID232435452', name: 'Ascoril LS Syrup', group: 'Diabetes', stock: 85, link: 'View Full Detail >>' },
    { id: 'D06ID232435453', name: 'Azee 500 Tablet', group: 'Generic Medicine', stock: 75, link: 'View Full Detail >>' },
    { id: 'D06ID232435454', name: 'Allegra 120mg Tablet', group: 'Diabetes', stock: 44, link: 'View Full Detail >>' },
    { id: 'D06ID232435455', name: 'Alex Syrup', group: 'Generic Medicine', stock: 65, link: 'View Full Detail >>' },
    { id: 'D06ID232435456', name: 'Amoxyclav 625 Tablet', group: 'Generic Medicine', stock: 150, link: 'View Full Detail >>' },
    { id: 'D06ID232435457', name: 'Avil 25 Tablet', group: 'Generic Medicine', stock: 270, link: 'View Full Detail >>' },
  ];
  return (
    <Fragment>
      <div className="inventory-list-container">
        <div className="inventory-header-container">
          <div className="inventory-title-section">
            <h3>Inventory {'>'} </h3>
            <Link className="inventory-link" to="#">
              List of Medicines (298)
            </Link>

          </div>
          <CustomButton
            onClick={handleAddNew}
            className="add-button"
            iconType="add"
          >
            Add New Item
          </CustomButton>
        </div>
        <div className='inventory-search-container'>
          <SearchBar placeholder="Search for Medicine" />
          <CustomButton
            onClick={handleSelect}
            className="select-button"
            iconType="download"
          >
            - Select Group -
          </CustomButton>
        </div>

        {/* Inventory Table */}
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Medicine ID</th>
              <th>Group Name</th>
              <th>Stock in Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.id}</td>
                <td>{medicine.group}</td>
                <td>{medicine.stock}</td>
                <td><Link to="#">{medicine.link}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="inventory-pagination">
          <p>Showing 1 - 8 results of 298</p>
          <div className="pagination-controls">
            <FontAwesomeIcon icon={faAngleLeft} className="pagination-icon" />
            <p>Page 01 <FontAwesomeIcon icon={faAngleDown} /></p>
            <FontAwesomeIcon icon={faAngleRight} className="pagination-icon" />
          </div>
        </div>

      </div>
    </Fragment >
  );
};

export default InventoryDetails
