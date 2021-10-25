import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboardNav from '../admin/AdminDashboardNav';
import AdminDashboard from '../admin/AdminDashboard';
import Login from '../patient/Login';
import MetaMaskConnect from '../patient/MetaMaskConnect';
import PatientDashBoard from '../patient/PatientDashBoard';

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboardNav />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>
        <div className="App">
          <Route path="/" element={<Login />} />
          <Route path="/metamask" element={<MetaMaskConnect />} />
          <Route path="/dashboard" element={<PatientDashBoard />} />
        </div>
      </Routes>
    </Router>
  );
};

export default App;
