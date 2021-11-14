// Restrict to logged in admins
// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateAdminOutlet = () => {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to="/login" state={{ redirectFrom: 'admin' }} />;
};

export default PrivateAdminOutlet;
