import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboardNav from '../admin/AdminDashboardNav';
import AdminDashboard from '../admin/AdminDashboard';
import Login from '../user/Login';
import MetaMaskConnect from '../patient/MetaMaskConnect';
import PatientDashBoard from '../patient/PatientDashBoard';
import SignUp from '../user/SignUp';
import './App.css';

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboardNav />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
        <div className="App">
          <Route path="/" element={<Login />} />
          <Route path="/metamask" element={<MetaMaskConnect />} />
          <Route path="/dashboard" element={<PatientDashBoard />} />
          <Route path="/signup" element={<SignUp />} />
        </div>
      </Routes>
    </Router>
  );
};

export default App;
