import React, { useEffect, useState } from 'react';
import {
  Grid, Paper, TextField, Button, Typography, Link, Box,
} from '@mui/material';
import { Link as routerLink } from 'react-router-dom';
import { useCreateUserMutation, useGetUserByIdQuery } from './userApi';

const paperStyle = {
  padding: 20, height: 'fit-content', width: 'fit-content', margin: '5% auto',
};
const btnstyle = {
  margin: '8px 0',
};

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // TODO: create UI for isAdmin
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [createUser, opts] = useCreateUserMutation();
  // TODO: remove
  const userById = useGetUserByIdQuery(0);

  useEffect(() => {
    try {
      const res = userById.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  const validatePassword = () => {
    // TODO: add more here such as required length, characters, etc
    return password === confirmedPassword;
  };

  const onSignUpClicked = async () => {
    console.log('signupclicked');
    if (!validatePassword()) {
      console.log('not validated');
      // show error
    }
    // should DB have different fields for these? for sorting better?
    const name = `${firstName} ${middleName} ${lastName}`;
    // TODO: handle user creation error
    console.log('before');
    console.log(name, opts);
    try {
      await createUser({
        name, email, password, isAdmin: false,
      }).unwrap();
      console.log('after');
      console.log(opts);
    } catch (err) {
      console.log(err);
    }
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
          />
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
        <Typography style={{ marginTop: '20px' }} variant="subtitle2" align="left"> Already have an account? <Link component={routerLink} to="/"> Log in</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
