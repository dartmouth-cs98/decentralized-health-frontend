import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const AdminOutlet = () => {
  const { isAdmin } = useAuth();
  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export const PatientOutlet = () => {
  const { isPatient } = useAuth();
  return isPatient ? <Outlet /> : <Navigate to="/login" />;
};
