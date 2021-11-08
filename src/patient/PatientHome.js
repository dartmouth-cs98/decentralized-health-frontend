import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';

// temporary state for UI prototyping
const temp = {
  name: 'John',
};

const PatientHome = (props) => {
  const { pathname } = useLocation();

  return (
    <div>
      <Typography variant="h1">Welcome, {temp.name}</Typography>
      <div>
        <Link to={`${pathname}/allergies`}>Allergies</Link>
        <Link to={`${pathname}/blood-tests`}>Blood tests</Link>
        <Link to={`${pathname}/procedures`}>Procedures</Link>
        <Link to={`${pathname}/physicals`}>Physicals</Link>
      </div>
    </div>
  );
};

export default PatientHome;
