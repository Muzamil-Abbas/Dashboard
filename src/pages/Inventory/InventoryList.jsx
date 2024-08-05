import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/InventoryList.css';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import CustomButton from '../../components/buttons/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar';
import { Outlet } from 'react-router-dom';


const InventoryList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAddNew = () => alert('Add New Item Successfully');
  const handleSelect = () => alert('Select Group Successfully');
  const handleEdit = () => alert('Edit Details Successfully');
  const handleDelete = () => alert('Delete Medicine Successfully');
  const handleSave = () => alert('Save Details Successfully');

  const medicines = [
    { id: 'D06ID232435454', name: 'Augmentin 625 Duo Tablet', group: 'Generic Medicine', stock: 350, link: 'View Full Detail' },
    { id: 'D06ID232435451', name: 'Azithral 500 Tablet', group: 'Generic Medicine', stock: 20, link: 'View Full Detail' },
    { id: 'D06ID232435452', name: 'Ascoril LS Syrup', group: 'Diabetes', stock: 85, link: 'View Full Detail' },
    { id: 'D06ID232435453', name: 'Azee 500 Tablet', group: 'Generic Medicine', stock: 75, link: 'View Full Detail' },
    { id: 'D06ID232435454', name: 'Allegra 120mg Tablet', group: 'Diabetes', stock: 44, link: 'View Full Detail' },
    { id: 'D06ID232435455', name: 'Alex Syrup', group: 'Generic Medicine', stock: 65, link: 'View Full Detail' },
    { id: 'D06ID232435456', name: 'Amoxyclav 625 Tablet', group: 'Generic Medicine', stock: 150, link: 'View Full Detail' },
    { id: 'D06ID232435457', name: 'Avil 25 Tablet', group: 'Generic Medicine', stock: 270, link: 'View Full Detail' },
  ];

  const indexOfLastMedicine = currentPage * itemsPerPage;
  const indexOfFirstMedicine = indexOfLastMedicine - itemsPerPage;
  const currentMedicines = medicines.slice(indexOfFirstMedicine, indexOfLastMedicine);

  const totalPages = Math.ceil(medicines.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Fragment>
      <div className="inventory-list-container">
        <div className="inventory-header-container">
          <div className="inventory-title-section">
            <h3>Inventory {'>'} </h3>
            <Link className="inventory-link" to="details">
              List of Medicines (298)
            </Link>
          </div>
          <CustomButton onClick={handleAddNew} className="add-button" iconType="add">
            Add New Item
          </CustomButton>
        </div>
        <div className="inventory-search-container">
          <SearchBar placeholder="Search for Medicine" />
          <CustomButton onClick={handleSelect} className="select-button" iconType="download">
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
            {currentMedicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.id}</td>
                <td>{medicine.group}</td>
                <td>{medicine.stock}</td>
                <td>
                  <Link to="details">{medicine.link}</Link>
                  <FontAwesomeIcon icon={faAngleDoubleRight} className="medicine-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Outlet /> {/* This will render the nested routes */}

        <div className="inventory-pagination">
          <p>Showing {indexOfFirstMedicine + 1} - {Math.min(indexOfLastMedicine, medicines.length)} results of {medicines.length}</p>
          <div className="pagination-controls">
            <FontAwesomeIcon icon={faAngleLeft} className="pagination-icon" onClick={handlePrevPage} />
            <p>Page {currentPage} <FontAwesomeIcon icon={faAngleDown} /></p>
            <FontAwesomeIcon icon={faAngleRight} className="pagination-icon" onClick={handleNextPage} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InventoryList;
