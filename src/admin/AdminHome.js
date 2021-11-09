import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGetAdminInfoQuery } from './AdminContractApi';

const AdminHome = (props) => {
  const { pathname } = useLocation();

  // TODO: ADD Error component in common TO RENDER WITH ERROR
  const { data } = useGetAdminInfoQuery();

  return (
    <div>
      {data
        ? <h1>Welcome, {data[0]}</h1>
        : <p>error</p>}
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
