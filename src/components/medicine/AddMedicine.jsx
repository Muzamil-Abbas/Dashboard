import React, { useState } from 'react';
import '../../styles/AddMedicinePopup.css';

const AddMedicine = ({ onClose, onAdd }) => {
  const [medicineName, setMedicineName] = useState('');
  const [medicineCount, setMedicineCount] = useState('');

  const handleAdd = () => {
    onAdd({ name: medicineName, count: parseInt(medicineCount, 10) });
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add Medicine</h2>
        <div className="form-group">
          <label>Medicine Name</label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Medicine Count</label>
          <input
            type="number"
            value={medicineCount}
            onChange={(e) => setMedicineCount(e.target.value)}
          />
        </div>
        <div className="popup-actions">
          <button onClick={handleAdd}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicine;
