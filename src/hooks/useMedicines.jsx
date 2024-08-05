import { useState, useEffect } from 'react';
import medicineGroupsData from '../data/medicineGroups.json';

const useMedicineGroups = () => {
  const [medicineGroups, setMedicineGroups] = useState([]);

  useEffect(() => {
    setMedicineGroups(medicineGroupsData);
  }, []);

  return medicineGroups;
};

export default useMedicineGroups;


