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
import PatientDashboardHome from '../patient/PatientHome.js';
import PatientAllergies from '../patient/PatientAllergies.js';
import RecordUploadForm from '../admin/RecordUploadForm.js';

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="" element={<AdminDashboardHome />} />
          <Route path="patients" element={<AdminPatients />} />
          <Route path="patients/:id" element={<AdminSinglePatient />} />
          <Route path="allergies/add" element={<RecordUploadForm />} />
          <Route path="blood-tests/add" element={<RecordUploadForm />} />
          <Route path="procedures/add" element={<RecordUploadForm />} />
        </Route>
        <Route path="/patient" element={<PatientDashBoard />}>
          <Route path="" element={<PatientDashboardHome />} />
          <Route path="allergies" element={<PatientAllergies />} />
        </Route>
        <Route className="App">
          <Route path="/" element={<Login />} />
          <Route path="/metamask" element={<MetaMaskConnect />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
