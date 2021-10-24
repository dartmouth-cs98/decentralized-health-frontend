import React from 'react';
import {
  Grid,
} from '@mui/material';
import Header from './Header';
import FileTable from './FileTable';

const PatientDashBoard = () => {
  return (
    <Grid>
      <Header />
      <FileTable />
    </Grid>
  );
};

export default PatientDashBoard;
