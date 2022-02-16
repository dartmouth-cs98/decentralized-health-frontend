import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import DashBoardCard from '../common/DashBoardCard';
import { useGetPatientInfoQuery } from './patientContractApi';

const PatientHome = (props) => {
  const { pathname } = useLocation();

  // TODO: ADD Error component in common TO RENDER WITH ERROR
  const { data } = useGetPatientInfoQuery();

  return (
    <div>
      {data
        ? <Typography sx={{ mb: 2.5 }} variant="h1">Welcome, {data.name}</Typography>
        : <p>error</p>}
      <div>
        <Grid container columnSpacing={10} rowSpacing={5}>
          <Grid item xs="auto">
            {/* TODO update route */}
            <DashBoardCard title="Doctors" to={`${pathname}/doctors`} />
          </Grid>
          <Grid item xs="auto">
            {/* TODO update route */}
            <DashBoardCard title="Files" to={`${pathname}/files`} />
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
