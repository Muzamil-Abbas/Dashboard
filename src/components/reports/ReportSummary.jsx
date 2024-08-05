import React from 'react';
import '../styles/reportSummary.css';

const ReportSummary = () => {
  return (
    <div className="report-summary">
      <div className="summary-item">
        <h3>Total Sales Report</h3>
        <button>View Detailed Report</button>
      </div>
      <div className="summary-item">
        <h3>Payment Report</h3>
        <button>View Detailed Report</button>
      </div>
      <div className="summary-item">
        <h3>Sales Report</h3>
        <button>View Detailed Report</button>
      </div>
    </div>
  );
};

export default ReportSummary;
