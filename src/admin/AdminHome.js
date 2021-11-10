import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DashBoardCard from '../common/DashBoardCard';

// temporary state for UI prototyping
const temp = {
  name: 'Dr. Hardy',
};

const AdminHome = (props) => {
  const { pathname } = useLocation();

  return (
    <div>
      <Typography sx={{ mb: 2.5 }} variant="h1">Welcome, {temp.name}</Typography>
      <Grid container columnSpacing={10} rowSpacing={5}>
        <Grid item xs="auto">
          <DashBoardCard title="Patients" to={`${pathname}/patients`} />
        </Grid>
        <Grid item xs="auto">
          <DashBoardCard title="Blood Tests" to={`${pathname}/blood-tests`} />
        </Grid>
        <Grid item xs="auto">
          <DashBoardCard title="Procedures" to={`${pathname}/procedures`} />
        </Grid>
        <Grid item xs="auto">
          <DashBoardCard title="Allergies" to={`${pathname}/allergies`} />
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminHome;
