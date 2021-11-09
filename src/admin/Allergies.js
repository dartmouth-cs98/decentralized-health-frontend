import React, { useState } from 'react';
import {
  Grid, Box, TextField, Button, Paper, Typography,
} from '@mui/material';

const paperStyle = {
  padding: 25, marginTop: '5%',
};
const btnstyle = {
  margin: '8px 0',
};

const RecordUploadForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // TODO: create UI for isAdmin
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const validatePassword = () => {
    // TODO: add more here such as required length, characters, etc
    // return password === confirmedPassword;
  };

  const onSignUpClicked = async () => {
    console.log('signupclicked');
    validatePassword();
  };
  return (
    <Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Extend to different doc types */}
        <Typography variant="h1">Allergies </Typography>
      </Box>

      <Paper elavation={10} style={paperStyle}>
        <Box sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, minMax(200px, 400px))',
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
          sx={{ width: '250px' }}
          type="button"
          color="primary"
          variant="contained"
          style={btnstyle}
          onClick={onSignUpClicked}
        >Add Record
        </Button>
      </Paper>
    </Grid>
  );
};

export default RecordUploadForm;
