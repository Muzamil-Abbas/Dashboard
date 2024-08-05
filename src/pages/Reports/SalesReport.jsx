import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import * as d3 from 'd3';
import 'react-datepicker/dist/react-datepicker.css';
import CustomButton from '../../components/buttons/CustomButton';
import '../../styles/SalesReport.css';

const SalesReport = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date('2021-12-01'));
  const [endDate, setEndDate] = useState(new Date('2021-12-31'));
  const [group, setGroup] = useState('');
  const [userName, setUserName] = useState('');

  const handleDownloadDropdownToggle = () => setDropdownVisible(!dropdownVisible);

  const downloadDropdownItems = [
    { label: 'Excel', icon: faFileExcel, onClick: () => { alert('Download Excel'); setDropdownVisible(false); } },
    { label: 'PDF', icon: faFilePdf, onClick: () => { alert('Download PDF'); setDropdownVisible(false); } }
  ];

  const salesData = [
    { date: '1 Dec', value: 200 },
    { date: '8 Dec', value: 50 },
    { date: '16 Dec', value: 0 },
    { date: '31 Dec', value: 100 },
  ];
  const salesTableData = [
    { orderId: '2485855848577', dateTime: '01 Dec 2021 10:25' },
    { orderId: '2485855848563', dateTime: '03 Dec 2021 18:25' },
    { orderId: '2485855848599', dateTime: '05 Dec 2021 18:25' },
    { orderId: '2485855848568', dateTime: '09 Dec 2021 18:25' },
    { orderId: '2485855848567', dateTime: '10 Dec 2021 18:25' },
    { orderId: '2485855848564', dateTime: '15 Dec 2021 18:25' },
    { orderId: '2485855848544', dateTime: '21 Dec 2021 18:25' },
  ];
  useEffect(() => {
    drawChart();
  }, [salesData]);

  const drawChart = () => {
    const width = 500;
    const height = 250;
    const margin = { top: 30, right: 20, bottom: 30, left: 50 };

    d3.select('.sales-graph-svg').selectAll('*').remove();

    const svg = d3.select('.sales-graph-svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scalePoint()
      .domain(salesData.map(d => d.date))
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(salesData, d => d.value)])
      .nice()
      .range([height, 0]);

    const line = d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat(d => `${d}`))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').attr('stroke', '#ddd').attr('stroke-dasharray', '4,2'))
      .call(g => g.selectAll('.tick text').attr('x', -10).attr('dy', 4));

    svg.append('path')
      .datum(salesData)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    svg.selectAll('.dot')
      .data(salesData)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.date))
      .attr('cy', d => y(d.value))
      .attr('r', 4)
      .attr('fill', 'steelblue');
  };

  return (
    <div className="sales-report-container">
      <div className="report-header-container">
        <div className="report-list">
          <h2>Sales Report {'>'}</h2>
          <Link className="inventory-link" to="/InventoryDetails">
            Medicines Group (2)
          </Link>
        </div>
        <CustomButton
          onClick={handleDownloadDropdownToggle}
          className="select-button"
          iconType="download"
          dropdownItems={dropdownVisible ? downloadDropdownItems : []}
        >
          Download Report
        </CustomButton>
      </div>

      <p>Sales related report of the pharmacy.</p>

      <div className="filter-item">
        <div className="filter-items">
          <label>Date Range</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd MMMM yyyy"
            className="date-picker"
          />
          <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icons" />
        </div>
        <div className="filter-items">
          <label>Medicine Group</label>
          <div className="select-container">
            <select value={group} onChange={(e) => setGroup(e.target.value)} className="select-input">
              <option value="">Select Group</option>
            </select>
            <FontAwesomeIcon className="dropdown-icon" />
          </div>
        </div>
        <div className="filter-items">
          <label>User Name</label>
          <div className="select-container">
            <select value={userName} onChange={(e) => setUserName(e.target.value)} className="select-input">
              <option value="">Select User Name</option>
            </select>
            <FontAwesomeIcon className="dropdown-icon" />
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="sales-graph-box">
          <h3>Sales Made</h3>
          <svg className="sales-graph-svg"></svg>
        </div>
        <div className="sales-table-box">
          <table className="sales-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {salesTableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.orderId}</td>
                  <td>{row.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;

