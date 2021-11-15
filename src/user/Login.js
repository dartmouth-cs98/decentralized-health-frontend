import React, { useEffect, useState } from 'react';
import { useNavigate, Link as routerLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { skipToken } from '@reduxjs/toolkit/query';
import getWeb3 from '../web3/getWeb3';
import { useSignInUserQuery } from './userApi';

const paperStyle = {
  padding: 20, height: 'fit-content', width: 330, margin: '5% auto',
};
const btnstyle = {
  margin: '8px 0',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();
  const { data, isSuccess } = useSignInUserQuery(address ? { email, password, ethAddress: address } : skipToken);

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      const user = data[0];
      localStorage.setItem('token', user.token);
      if (user.is_admin) {
        navigate('/admin');
      } else {
        navigate('/patient');
      }
    }
  }, [data, isSuccess, navigate]);

  const signIn = async (event) => {
    try {
      const { ethAddress } = await getWeb3();
      setAddress(ethAddress);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid>
      <Paper elavation={10} style={paperStyle}>
        <h1 style={{ textAlign: 'left' }}>Login</h1>
        <TextField size="small"
          margin="normal"
          label="Email"
          placeholder="Enter email"
          onChange={(event) => { setEmail(event.target.value); }}
          fullWidth
          required
        />
        <TextField
          size="small"
          margin="normal"
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(event) => { setPassword(event.target.value); }}
          fullWidth
          required
        />
        <Typography align="left">
          <Link variant="subtitle2" href="#">
            Forgot password ?
          </Link>
        </Typography>
        <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth onClick={signIn}>Sign in</Button>
        <Typography style={{ marginTop: '16px' }} variant="subtitle2" align="left"> New to Med 3.0? Create a new account <Link component={routerLink} to="/signup"> here</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
