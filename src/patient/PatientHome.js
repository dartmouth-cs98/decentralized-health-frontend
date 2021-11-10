import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import DashBoardCard from '../common/DashBoardCard';
// temporary state for UI prototyping
const temp = {
  name: 'John',
};

const PatientHome = (props) => {
  const { pathname } = useLocation();

  return (
    <div>
      <Typography variant="h1" sx={{ mb: 2.5 }}>Welcome, {temp.name}</Typography>
      <div>
        <Grid container columnSpacing={10} rowSpacing={5}>
          <Grid item xs="auto">
            <DashBoardCard title="Allergies" to={`${pathname}/allergies`} />
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
    </div>
  );
};

export default PatientHome;
