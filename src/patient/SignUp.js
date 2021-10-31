import React from 'react';
import {
  Grid, Paper, TextField, Button, Typography, Link, Box,
} from '@mui/material';
import { Link as routerLink } from 'react-router-dom';

const SignUp = () => {
  const paperStyle = {
    padding: 20, height: 'fit-content', width: 'fit-content', margin: '5% auto',
  };
  const btnstyle = {
    margin: '8px 0',
  };

  return (
    <Grid>
      <Paper elavation={10} style={paperStyle}>
        <h1 style={{ textAlign: 'left' }}>Sign Up</h1>
        <Box sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
        >
          <TextField size="small" margin="normal" label="First Name" placeholder="First Name" fullWidth required />
          <TextField size="small" margin="normal" label="Middle Initial" placeholder="Middle Initial" fullWidth />
          <TextField size="small" margin="normal" label="Last Name" placeholder="Last Name" fullWidth required />
          <TextField size="small" margin="normal" label="Email" placeholder="Email" type="email" fullWidth required />
          <TextField size="small" margin="normal" label="Password" placeholder="ENter Password" type="email" fullWidth required />
          <TextField size="small" margin="normal" label="Confirm Password" placeholder="Confirm password" type="password" fullWidth required />
        </Box>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Create account</Button>
        <Typography style={{ marginTop: '20px' }} variant="subtitle2" align="left"> Already have an account? <Link component={routerLink} to="/"> Log in</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
