import React from 'react';
import { useHistory, Link as routerLink } from 'react-router-dom';
import {
  Grid, Paper, TextField, Button, Typography, Link,
} from '@mui/material';

const Login = () => {
  const history = useHistory();
  const paperStyle = {
    padding: 20, height: 'fit-content', width: 330, margin: '5% auto',
  };
  const btnstyle = {
    margin: '8px 0',
  };

  return (
    <Grid>
      <Paper elavation={10} style={paperStyle}>
        <h1 style={{ textAlign: 'left' }}>Login</h1>
        <TextField size="small" margin="normal" label="Username" placeholder="Enter username" fullWidth required />
        <TextField size="small" margin="normal" label="Password" placeholder="Enter password" type="password" fullWidth required />
        <Typography align="left">
          <Link variant="subtitle2" href="#">
            Forgot password ?
          </Link>
        </Typography>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth onClick={() => history.push('/metamask')}>Sign in</Button>
        <Typography style={{ marginTop: '16px' }} variant="subtitle2" align="left"> New to Med 3.0? Create a new account <Link component={routerLink} to="/signup"> here</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
