import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid, Paper, Button, Typography,
} from '@mui/material';

const MetaMaskConnect = () => {
  const paperStyle = {
    padding: 20, width: 200, margin: '5% auto',
  };
  const btnstyle = {
    margin: '8px 0',
  };

  return (
    <Grid>
      <Paper elavation={10} style={paperStyle}>
        <Typography color="primary" variant="h4" align="center"> MetaMask </Typography>
        <Typography variant="subtitle2" align="center"> Connect To Wallet </Typography>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth component={Link} to="/dashboard">Connect</Button>
      </Paper>
    </Grid>
  );
};

export default MetaMaskConnect;
