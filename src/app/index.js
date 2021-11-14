import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from '../admin/AdminDashboard.js';
import AdminDashboardHome from '../admin/AdminHome';
import Login from '../user/Login';
import MetaMaskConnect from '../patient/MetaMaskConnect';
import PatientDashBoard from '../patient/PatientDashBoard';
import SignUp from '../user/SignUp';
import AdminPatients from '../admin/AdminPatients';
import AdminSinglePatient from '../admin/AdminSinglePatient';
import PatientDashboardHome from '../patient/PatientHome';
import PatientAllergies from '../patient/PatientAllergies';
import AllergyForm from '../admin/AllergyForm';
import BloodTestForm from '../admin/BloodTestForm';
import ProcedureForm from '../admin/ProcedureForm';
import AdminBloodTests from '../admin/AdminBloodTests';
import AdminProcedures from '../admin/AdminProcedures';
import AdminAllergies from '../admin/AdminAllergies';
import LandingPage from '../home/LandingPage';

import './App.css';

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="" element={<AdminDashboardHome />} />
          <Route path="patients" element={<AdminPatients />} />
          <Route path="patients/:ethAddress" element={<AdminSinglePatient />} />
          <Route path="blood-tests" element={<AdminBloodTests />} />
          <Route path="procedures" element={<AdminProcedures />} />
          <Route path="allergies" element={<AdminAllergies />} />
          <Route path="allergies/new" element={<AllergyForm />} />
          <Route path="blood-tests/new" element={<BloodTestForm />} />
          <Route path="procedures/new" element={<ProcedureForm />} />
        </Route>
        <Route path="/patient" element={<PatientDashBoard />}>
          <Route path="" element={<PatientDashboardHome />} />
          <Route path="allergies" element={<PatientAllergies />} />
        </Route>
        <Route className="App">
          <Route path="/login" element={<Login />} />
          <Route path="/metamask" element={<MetaMaskConnect />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
