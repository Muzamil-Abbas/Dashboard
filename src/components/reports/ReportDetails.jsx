import React from 'react';
import '../styles/reportDetails.css';

const ReportDetails = ({ report }) => {
  return (
    <tr>
      <td>{report.id}</td>
      <td>{report.date}</td>
      <td>{report.sales}</td>
      <td>
        <button>Remove from Group</button>
      </td>
    </tr>
  );
};

export default ReportDetails;
