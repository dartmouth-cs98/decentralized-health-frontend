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
import PatientMedicalHistory from '../patient/PatientMedicalHistory';
import PatientBloodTests from '../patient/PatientBloodTests';
import PatientProcedures from '../patient/PatientProcedures';
import PatientDoctors from '../patient/PatientDoctors.js';
import PatientFullRecords from '../patient/PatientFullRecords.js';
import AllergyForm from '../admin/AllergyForm';
import BloodTestForm from '../admin/BloodTestForm';
import ProcedureForm from '../admin/ProcedureForm';
import AdminBloodTests from '../admin/AdminBloodTests';
import AdminProcedures from '../admin/AdminProcedures';
import AdminMedicalHistory from '../admin/AdminMedicalHistory';
import LandingPage from '../home/Lander';
import Tour from '../joyride/Tour';

import './App.css';

const App = (props) => {
  return (
    <>
      <Router>
        <Tour />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="" element={<AdminDashboardHome />} />
            <Route path="patients" element={<AdminPatients />} />
            <Route path="patients/:ethAddress" element={<AdminSinglePatient />} />
            <Route path="files/blood-tests" element={<AdminBloodTests />} />
            <Route path="files/:procedures" element={<AdminProcedures />} />
            <Route path="files/:medical-history" element={<AdminMedicalHistory />} />
            <Route path="allergies/new" element={<AllergyForm />} />
            <Route path="blood-tests/new" element={<BloodTestForm />} />
            <Route path="procedures/new" element={<ProcedureForm />} />
          </Route>
          <Route path="/patient" element={<PatientDashBoard />}>
            <Route path="" element={<PatientDashboardHome />} />
            <Route path="doctors" element={<PatientDoctors />} />
            <Route path="files" element={<PatientFullRecords />} />
            <Route path="files/:medical-history" element={<PatientMedicalHistory />} />
            <Route path="files/:blood-tests" element={<PatientBloodTests />} />
            <Route path="files/:procedures" element={<PatientProcedures />} />
          </Route>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/metamask" element={<MetaMaskConnect />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
