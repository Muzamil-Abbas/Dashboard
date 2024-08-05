import React, { Fragment } from 'react';
import '../../styles/Reports.css';
import { faMoneyCheckDollar, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import BoxContainer from '../../components/boxcomponent/BoxContainer';

const Reports = () => {
  return (
    <Fragment>
      <div className="reports-container">
        <div className="report-heading">
          <h2>Reports</h2>
          <p>Overall reports related to the pharmacy.</p>
        </div>
        <div className="boxes-container">
          <div className='green-box-container'>
            <BoxContainer
              icon={faMoneyCheckDollar}
              mainHeading="Rs. 8,55,875"
              subHeading="Total Sales Report "
              paragraphText="View Detailed Report"
            />
          </div>
          <div className='yello-box-container'>
            <BoxContainer
              icon={faHeartCirclePlus}
              mainHeading="523"
              subHeading="Payment Report"
              paragraphText="View Detailed Report"
            />
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Reports;
