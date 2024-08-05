import React from 'react';
import ReportDetails from './ReportDetails';
import reportData from '../../data/reports.json';
import '../styles/reportList.css';

const ReportList = () => {
  return (
    <div className="report-list">
      <h2>Sales Report</h2>
      <div className="report-filters">
        <input type="date" placeholder="Date Range" />
        <select>
          <option>- Select Group -</option>
          <option>Group 1</option>
          <option>Group 2</option>
        </select>
        <select>
          <option>- Select User Name -</option>
          <option>User 1</option>
          <option>User 2</option>
        </select>
        <button>Download Report</button>
      </div>
      <div className="report-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date & Time</th>
              <th>Sales Made</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((report) => (
              <ReportDetails key={report.id} report={report} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportList;
