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
import PatientBloodTests from '../patient/PatientBloodTests.js';
import PatientProcedures from '../patient/PatientProcedures.js';
import AllergyForm from '../admin/AllergyForm.js';
import BloodTestForm from '../admin/BloodTestForm.js';
import ProcedureForm from '../admin/ProcedureForm.js';
import AdminBloodTests from '../admin/AdminBloodTests.js';
import AdminProcedures from '../admin/AdminProcedures.js';
import AdminAllergies from '../admin/AdminAllergies.js';

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="" element={<AdminDashboardHome />} />
          <Route path="patients" element={<AdminPatients />} />
          <Route path="patients/:id" element={<AdminSinglePatient />} />
          <Route path="blood-tests" element={<AdminBloodTests />} />
          <Route path="procedures" element={<AdminProcedures />} />
          <Route path="allergies" element={<AdminAllergies />} />
          <Route path="allergies/add" element={<AllergyForm />} />
          <Route path="blood-tests/add" element={<BloodTestForm />} />
          <Route path="procedures/add" element={<ProcedureForm />} />
        </Route>
        <Route path="/patient" element={<PatientDashBoard />}>
          <Route path="" element={<PatientDashboardHome />} />
          <Route path="allergies" element={<PatientAllergies />} />
          <Route path="blood-tests" element={<PatientBloodTests />} />
          <Route path="procedures" element={<PatientProcedures />} />
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
