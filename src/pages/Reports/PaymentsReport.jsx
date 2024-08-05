import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomButton from '../../components/buttons/CustomButton';
import '../../styles/PaymentsReport.css';

const PaymentsReport = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDownloadDropdownToggle = () => setDropdownVisible(!dropdownVisible);

  const downloadDropdownItems = [
    { label: 'Excel', icon: faFileExcel, onClick: () => { alert('Download Excel'); setDropdownVisible(false); } },
    { label: 'PDF', icon: faFilePdf, onClick: () => { alert('Download PDF'); setDropdownVisible(false); } }
  ];

  const paymentData = [
    { orderId: '123456', date: '01 Dec 2021', amount: 150.75, status: 'Completed' },
    { orderId: '123457', date: '02 Dec 2021', amount: 200.00, status: 'Pending' },
    { orderId: '123458', date: '03 Dec 2021', amount: 175.25, status: 'Completed' },
    { orderId: '123459', date: '04 Dec 2021', amount: 120.50, status: 'Completed' },
    { orderId: '123460', date: '05 Dec 2021', amount: 250.00, status: 'Pending' },
    { orderId: '123461', date: '06 Dec 2021', amount: 300.00, status: 'Completed' },
    { orderId: '123462', date: '07 Dec 2021', amount: 225.75, status: 'Completed' },
  ];

  return (
    <div className="payments-report-container">
      <div className="payment-heading-containered">
        <div className="payment-heading">
          <h2>Payments Report</h2>
          <span>Date Range</span>
        </div>
        <CustomButton
          onClick={handleDownloadDropdownToggle}
          className="select-button left"
          iconType="download"
          dropdownItems={dropdownVisible ? downloadDropdownItems : []}
        >
          Download Report
        </CustomButton>
      </div>

      <div className="payment-summary">
        <div className="summary-item">
          <h3>Total Payments</h3>
          <p>$350.75</p>
        </div>
        <div className="summary-item">
          <h3>Completed</h3>
          <p>$150.75</p>
        </div>
        <div className="summary-item">
          <h3>Pending</h3>
          <p>$200.00</p>
        </div>
      </div>

      <div className="payment-table-container">
        <table className="payment-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr key={index}>
                <td>{payment.orderId}</td>
                <td>{payment.date}</td>
                <td>${payment.amount.toFixed(2)}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default PaymentsReport;
