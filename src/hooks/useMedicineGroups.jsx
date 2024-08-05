import { useState, useEffect } from 'react';
import medicineGroupsData from '../data/medicineGroups.json';

const useMedicineGroups = (groupId) => {
  const [medicineGroups, setMedicineGroups] = useState([]);
  const [medicineGroupDetails, setMedicineGroupDetails] = useState(null);

  useEffect(() => {
    setMedicineGroups(medicineGroupsData);
    if (groupId) {
      const group = medicineGroupsData.find(group => group.id === groupId);
      setMedicineGroupDetails(group);
    }
  }, [groupId]);

  return { medicineGroups, medicineGroupDetails, setMedicineGroupDetails };
};

export default useMedicineGroups;
