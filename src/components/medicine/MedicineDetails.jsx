import React from 'react';
import { Link } from 'react-router-dom';

const MedicineDetails = ({ medicines }) => (
  <table className="medicine-details-table">
    <thead>
      <tr>
        <th>Medicine Name</th>
        <th>No of Medicines</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {medicines.map((medicine, index) => (
        <tr key={index}>
          <td>{medicine.name}</td>
          <td>{medicine.count}</td>
          <td><Link to="#">Remove from Group</Link></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MedicineDetails;
