import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth component={Link} to="/patient">Connect</Button>
      </Paper>
    </Grid>
  );
};

export default MetaMaskConnect;
