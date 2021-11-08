import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// temporary state for UI prototyping
const temp = {
  name: 'Dr Hardy',
};

const AdminHome = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      <h1>Welcome, {temp.name}</h1>
      <div>
        <Link to={`${pathname}/patients`}>Patients</Link>
        <Link to={`${pathname}/blood-tests`}>Blood tests</Link>
        <Link to={`${pathname}/procedures`}>Procedures</Link>
        <Link to={`${pathname}/physicals`}>Physicals</Link>
      </div>
    </div>
  );
};

export default AdminHome;
