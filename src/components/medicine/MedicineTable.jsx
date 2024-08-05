import React from 'react';
import { Link } from 'react-router-dom';
import useMedicineGroups from '../../hooks/useMedicines';

const MedicineTable = ({ medicineGroups }) => (
  <table className="medicine-group-table">
    <thead>
      <tr>
        <th>Group Name</th>
        <th>No of Medicines</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {medicineGroups.map((group) => (
        <tr key={group.id}>
          <td>{group.name}</td>
          <td>{group.medicineCount}</td>
          <td><Link to="#">{group.link}</Link></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MedicineTable;
