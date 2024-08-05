import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMedicineGroups from '../../hooks/useMedicines';
import CustomButton from '../../components/buttons/CustomButton';
import SearchBar from '../../components/searchbar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/MedicineGroup.css';
import AddMedicine from '../../components/medicine/AddMedicine';

const MedicineGroup = () => {
  const medicineGroups = useMedicineGroups();
  const [searchTerm, setSearchTerm] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddGroup = () => {
    setPopupVisible(true);
  };

  const handleDelete = () => alert('Delete Medicine Successfully');

  const filteredGroups = medicineGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="medicine-group-container">
      <div className="inventory-header-container">
        <div className="inventory-title-section">
          <h3>Inventory {'>'} </h3>
          <Link className="inventory-link" to="/InventoryDetails">
            Medicines Group (2)
          </Link>
        </div>
        <CustomButton
          onClick={handleAddGroup}
          className="add-button"
          iconType="add"
        >
          Add New Group
        </CustomButton>
      </div>
      <p>List of medicines available for sales.</p>
      <div className='inventory-search-container'>
        <SearchBar placeholder="Search for Medicine" onChange={handleSearchChange} />
      </div>
      <table className="medicine-group-table">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>No of Medicines</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredGroups.map((group) => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>{group.medicineCount}</td>
              <td><Link to="#">{group.link}</Link>
                <FontAwesomeIcon icon={faAngleDoubleRight} className='medicine-icon' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomButton
        onClick={handleDelete}
        className="delete-button"
        iconType="delete"
      >
        Delete Medicine
      </CustomButton>
      {isPopupVisible && <AddMedicine onClose={() => setPopupVisible(false)} />}
    </div>
  );
};

export default MedicineGroup;
