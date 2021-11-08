import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from '../admin/AdminDashboard.js';
import AdminDashboardHome from '../admin/AdminHome';
import Login from '../user/Login';
import MetaMaskConnect from '../patient/MetaMaskConnect';
import PatientDashBoard from '../patient/PatientDashBoard';
import SignUp from '../user/SignUp';
import './App.css';
import AdminPatients from '../admin/AdminPatients.js';
import AdminSinglePatient from '../admin/AdminSinglePatient.js';

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="" element={<AdminDashboardHome />} />
          <Route path="patients" element={<AdminPatients />} />
          <Route path="patients/:id" element={<AdminSinglePatient />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/metamask" element={<MetaMaskConnect />} />
        <Route path="/dashboard" element={<PatientDashBoard />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
