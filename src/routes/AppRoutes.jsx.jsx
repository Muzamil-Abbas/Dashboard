import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Home from '../pages/Dashboard/Home';
import Inventory from '../pages/Inventory/Inventory';
import InventoryList from '../pages/Inventory/InventoryList';
import MedicineGroup from '../pages/Medicine/MedicineGroup';
import Reports from '../pages/Reports/Reports';
import SalesReport from '../pages/Reports/SalesReport';
import PaymentsReport from '../pages/Reports/PaymentsReport';
import Configurations from '../pages/Configuration/Configurations';
import ContactManagement from '../pages/ContactManagement/ContactManagement';
import Notifications from '../pages/Notifications/Notifications';
import ChatVisitors from '../pages/ChatVisitors/ChatVisitors';
import ApplicationSettings from '../pages/ApplicationSettings/ApplicationSettings';
import Covid from '../pages/Covid/Covid19';
import GetTechnicalHelp from '../pages/Help/GetTechnicalHelp';
import ToggleButton from '../components/buttons/ToggleButton';

const AppRoutes = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/list" element={<InventoryList />} />
              <Route path="/medicinegroup" element={<MedicineGroup />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/salesreport" element={<SalesReport />} />
              <Route path="/paymentsreport" element={<PaymentsReport />} />
              <Route path="/configurations" element={<Configurations />} />
              <Route path="/contact-management" element={<ContactManagement />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/chat-with-visitors" element={<ChatVisitors />} />
              <Route path="/application-settings" element={<ApplicationSettings />} />
              <Route path="/covid-19" element={<Covid />} />
              <Route path="/get-technical-help" element={<GetTechnicalHelp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router >
  );
};

export default AppRoutes;
