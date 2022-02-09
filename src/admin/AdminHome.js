import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetAdminInfoQuery } from './adminContractApi';
import DashBoardCard from '../common/DashBoardCard';

const AdminHome = (props) => {
  const { pathname } = useLocation();

  // TODO: ADD Error component in common TO RENDER WITH ERROR
  const { data } = useGetAdminInfoQuery();

  return (
    <div>
      {data
        ? <Typography sx={{ mb: 2.5 }} variant="h1">Welcome, {data.name}</Typography>
        : <CircularProgress />}
      <Grid container columnSpacing={10} rowSpacing={5}>
        <Grid item xs="auto">
          <DashBoardCard title="Patients" to={`${pathname}/patients`} />
        </Grid>
        <a href="/patient"><button type="button">patient side</button></a>
        {/* <Grid item xs="auto">
          <DashBoardCard title="Blood Tests" to={`${pathname}/blood-tests`} />
        </Grid>
        <Grid item xs="auto">
          <DashBoardCard title="Procedures" to={`${pathname}/procedures`} />
        </Grid>
        <Grid item xs="auto">
          <DashBoardCard title="Allergies" to={`${pathname}/allergies`} />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default AdminHome;
