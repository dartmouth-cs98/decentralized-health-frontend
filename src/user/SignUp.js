import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from './userApi';
import { useAddDoctorToChainMutation } from '../admin/AdminContractApi';
import { connectToMetamask } from '../web3/getWeb3';

const paperStyle = {
  padding: 20, height: 'fit-content', width: 'fit-content', margin: '5% auto',
};
const btnstyle = {
  margin: '8px 0',
};

// TODO: here is where we ask to connect to metamask, perhaps sign up button should
// be the same as connect button, or we can have both
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [admin, setAdmin] = useState('');
  const [createUser] = useCreateUserMutation();
  const [addDoctorToChain] = useAddDoctorToChainMutation();
  const navigate = useNavigate();

  const validatePassword = () => {
    // TODO: add more here such as required length, characters, etc
    return password === confirmedPassword;
  };

  const onSignUpClicked = async () => {
    console.log('signupclicked');
    if (!validatePassword()) {
      console.log('password not validated');
      // show error
    }
    // should DB have different fields for these? for sorting better?
    const name = `${firstName} ${middleName} ${lastName}`;
    // TODO: handle user creation error

    try {
      const ethAddress = await connectToMetamask();
      const payload = await createUser({
        name, email, password, admin, eth_address: ethAddress,
      }).unwrap();
      localStorage.setItem('token', payload.token);
      // Handle patient
      if (admin) {
        await addDoctorToChain({ name, clinic: 'default' });
        navigate('/admin');
      }
      // TODO: modify payload serverside maybe
      console.log(payload);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid>
      <Paper elavation={10} style={paperStyle}>
        <Typography variant="h1">Sign Up</Typography>
        <Box sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
          component="form"
        >
          <TextField
            size="small"
            margin="normal"
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => { setFirstName(event.target.value); }}
            fullWidth
            required
          />
          <TextField
            size="small"
            margin="normal"
            label="Middle Name"
            placeholder="Middle Name"
            value={middleName}
            onChange={(event) => { setMiddleName(event.target.value); }}
            fullWidth
          />
          <TextField
            size="small"
            margin="normal"
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => { setLastName(event.target.value); }}
            fullWidth
            required
          />
          <TextField
            size="small"
            margin="normal"
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => { setEmail(event.target.value); }}
            fullWidth
            required
            autoComplete="email"
          />
          <TextField
            size="small"
            margin="normal"
            label="Password"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(event) => { setPassword(event.target.value); }}
            fullWidth
            required
            autoComplete="new-password"
          />
          <TextField
            size="small"
            margin="normal"
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            value={confirmedPassword}
            onChange={(event) => { setConfirmedPassword(event.target.value); }}
            fullWidth
            required
            autoComplete="new-password"
          />
          <FormControl fullWidth>
            <InputLabel>Admin or patient?</InputLabel>
            <Select
              value={admin}
              label="Admin or patient?"
              onChange={(event) => { setAdmin(event.target.value); }}
            >
              <MenuItem value>Admin</MenuItem>
              <MenuItem value={false}>Patient</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          type="button"
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={onSignUpClicked}
          fullWidth
        >Create account
        </Button>
        <Typography style={{ marginTop: '20px' }} variant="subtitle2" align="left"> Already have an account? <Link component={RouterLink} to="/"> Log in</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
