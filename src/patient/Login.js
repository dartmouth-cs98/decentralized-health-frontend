import React from 'react';
import {
  Grid, Paper, TextField, Button, Typography, Link,
} from '@mui/material';
import { Link as routerLink } from 'react-router-dom';

const Login = () => {
  const paperStyle = {
    padding: 20, height: '70vh', width: 330, margin: '5% auto',
  };
  const btnstyle = {
    margin: '8px 0',
  };

  return (
    <Grid>
      <Paper elavation={10} style={paperStyle}>
        <h2>Login</h2>
        <TextField margin="normal" label="Username" placeholder="Enter username" fullWidth required />
        <TextField margin="normal" label="Password" placeholder="Enter password" type="password" fullWidth required />
        <Typography align="left">
          <Link variant="subtitle2" href="#">
            Forgot password ?
          </Link>
        </Typography>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        <Typography variant="subtitle2" align="left"> New to Med 3.0? Create a new account <Link component={routerLink} to="/metamask"> here</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
