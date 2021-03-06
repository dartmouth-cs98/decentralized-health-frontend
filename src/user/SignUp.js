import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// import { useCreateUserMutation } from './userApi';
import { useAddDoctorToChainMutation } from '../admin/adminContractApi';
import { useAddPatientToChainMutation } from '../patient/patientContractApi';
import getWeb3 from '../web3/getWeb3';
import image from '../images/HeaderBg.png';
import CustomSpinner from '../common/CustomSpinner'; // TODO: modify spinner styling as necessary
import Header from '../common/Header';
import {
  stepUpdated,
} from '../joyride/tourSlice';

// TODO: here is where we ask to connect to metamask, perhaps sign up button should
// be the same as connect button, or we can have both
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmedPassword, setConfirmedPassword] = useState('');
  const [admin, setAdmin] = useState('Both'); // modify state name to user?
  const [clinic, setClinic] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [loginError, setLoginError] = useState({});
  const [alert, setAlert] = useState(false);
  const [addDoctorToChain] = useAddDoctorToChainMutation();
  const [addPatientToChain] = useAddPatientToChainMutation();
  const navigate = useNavigate();
  // const [createUser] = useCreateUserMutation();
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  // reset spinner and waiting text
  const cleanUp = () => {
    setClicked(false);
  };

  const handleClose = () => {
    setAlert(false);
  };

  const validateEmail = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const onSignUpClicked = async () => {
    // change clicked state, conditionally render spinner and text
    setClicked(true);
    setLoginError({});
    let error = {};

    if (!validateEmail()) {
      error = { ...error, INVALID_EMAIL: true };
    } if (firstName === '') {
      error = { ...error, NO_FIRST_NAME: true };
    } if (lastName === '') {
      error = { ...error, NO_LAST_NAME: true };
    } if (clinic === '') {
      error = { ...error, NO_CLINIC: true };
    } if (!birthDate || birthDate === '') {
      error = { ...error, NO_DOB: true }; // todo : validate date
    // } if (password !== confirmedPassword) {
    //   error = { ...error, PASSWORD_MISMATCH: true };
    // } if (!password || password === '') {
    //   error = { ...error, EMPTY_PASSWORD: true };
    }
    setLoginError(error);
    const name = `${firstName} ${middleName} ${lastName}`;
    try {
      if (!isMetaMaskInstalled()) {
        setLoginError({ ...loginError, NO_METAMASK: true });
        setAlert(true);
        cleanUp();
        return;
      }
      // TODO: don't allow existing wallet to sign up again
      dispatch(stepUpdated(8));
      const web3response = await getWeb3();
      const {
        ethAddress, code,
      } = web3response;
      if (code === -32002 || !ethAddress) {
        setLoginError({ ...loginError, NOT_SIGNED_INTO_METAMASK: true });
        setAlert(true);
        cleanUp();
        return;
      }
      // const payload = await createUser({
      //   name, email, password, admin: admin === 'Admin', eth_address: ethAddress,
      // }).unwrap();
      // localStorage.setItem('token', payload.token);

      // TODO: Sign in as both
      if (admin === 'Admin') {
        await addDoctorToChain({ name, clinic });
        cleanUp();
        navigate('/admin');
      } else if (admin === 'Both') {
        await addDoctorToChain({ name, clinic, email });
        await addPatientToChain({ name, dateOfBirth: birthDate, email });
        cleanUp();
        navigate('/patient'); // patient by default
      } else {
        await addPatientToChain({ name, dateOfBirth: birthDate, email });
        cleanUp();
        navigate('/patient');
      }
      // TODO: modify payload serverside maybe
    } catch (err) {
      cleanUp();
      console.log(err);
    }
  };

  return (
    <Box sx={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      <Header />
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        <Paper id="tour-signup-broad" elevation={10} sx={{ padding: '8px 25px', minWidth: 350, backgroundColor: '#ffffff7a' }}>
          <Typography marginBottom="10px" variant="h1">Sign Up</Typography>
          <Box sx={{
            display: 'grid',
            rowGap: 0.5,
            columnGap: 3,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
            component="form"
            id="tour-signup-actual"
          >
            <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">First Name</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl margin="dense" fullWidth>
                <TextField
                  size="small"
                  onChange={(event) => { setFirstName(event.target.value); }}
                  fullWidth
                  value={firstName}
                />
                {!firstName && loginError.NO_FIRST_NAME && <FormHelperText error>Enter a your first name</FormHelperText>}
              </FormControl>
            </Box>

            <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Middle Name</Typography>
              </Box>
              <FormControl margin="dense" fullWidth>
                <TextField
                  size="small"
                  onChange={(event) => { setMiddleName(event.target.value); }}
                  fullWidth
                  value={middleName}
                />
              </FormControl>
            </Box>

            <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Last Name</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl margin="dense" fullWidth>
                <TextField
                  size="small"
                  onChange={(event) => { setLastName(event.target.value); }}
                  fullWidth
                  value={lastName}
                />
                {!lastName && loginError.NO_LAST_NAME && <FormHelperText error>Enter last name</FormHelperText>}
              </FormControl>
            </Box>

            <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Email</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl margin="dense" fullWidth>
                <TextField
                  size="small"
                  onChange={(event) => { setEmail(event.target.value); }}
                  fullWidth
                  value={email}
                  type="email"
                />
                {loginError.INVALID_EMAIL && <FormHelperText error>Enter a valid email</FormHelperText>}
              </FormControl>
            </Box>

            {/* <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Password</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl margin="dense" fullWidth>
                <TextField
                  size="small"
                  onChange={(event) => { setPassword(event.target.value); }}
                  fullWidth
                  value={password}
                  type="password"
                  autoComplete="new-password"
                />
                {loginError.EMPTY_PASSWORD && <FormHelperText error>Enter password</FormHelperText>}
              </FormControl>
            </Box>

            <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Confirm Password</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl margin="dense" fullWidth>
                <TextField
                  size="small"
                  onChange={(event) => { setConfirmedPassword(event.target.value); }}
                  fullWidth
                  value={confirmedPassword}
                  type="password"
                  required
                  autoComplete="new-password"
                />
                {loginError.PASSWORD_MISMATCH && <FormHelperText error>Passwords must match</FormHelperText>}
              </FormControl>
            </Box> */}

            <Box id="tour-both-select">
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Role</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl fullWidth size="small" margin="dense">
                <Select
                  value={admin}
                  label="Admin or patient?"
                  onChange={(event) => { setAdmin(event.target.value); console.log(admin); }}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Patient">Patient</MenuItem>
                  <MenuItem value="Both">Both</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {(admin === 'Patient' || admin === 'Both') && (
            <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Date Of Birth</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={birthDate}
                    onChange={(newValue) => {
                      setBirthDate(newValue ? newValue.toDateString() : '');
                    }}
                    renderInput={(params) => (
                      <TextField size="small"
                        margin="dense"
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
                {loginError.NO_DOB && <FormHelperText error>Please specify birthdate</FormHelperText>}
              </FormControl>
            </Box>
            )}

            {(admin === 'Admin' || admin === 'Both') && (
            <Box>
              <Box display="flex">
                <Typography mr={0.5} display="flex" fontWeight="bold" align="left">Clinic</Typography>
                <Typography alignSelf="center" fontWeight="bold" color="red"> *</Typography>
              </Box>
              <FormControl fullWidth margin="dense">
                <TextField
                  size="small"
                  value={clinic}
                  onChange={(event) => { setClinic(event.target.value); }}
                  fullWidth
                  required
                />
                {loginError.NO_CLINIC && <FormHelperText error>Please specify clinic</FormHelperText>}
              </FormControl>
            </Box>
            )}

            {(loginError.NO_METAMASK || loginError.NOT_SIGNED_INTO_METAMASK)
      && (
        <Snackbar
          open={alert}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleClose}
          key="top center"
        >
          <Alert icon={false} onClose={handleClose} severity="error">
            {loginError.NOT_SIGNED_INTO_METAMASK && 'MetaMask - RPC Error: Make sure you\'re signed into your Metamask Wallet'}
            {loginError.NO_METAMASK
            && <>Metamask is not installed <Link target="_blank" color="error" rel="noopener" underline="none" href="https://metamask.io/download/">Install MetaMask</Link></>}
          </Alert>
        </Snackbar>
      )}
          </Box>

          <Button
            id="tour-create-account"
            type="button"
            color="primary"
            variant="contained"
            sx={{ margin: '8px 0' }}
            onClick={onSignUpClicked}
            fullWidth
          >Create account
          </Button>
          {clicked && <CustomSpinner style={{ width: '50%', margin: 'auto' }} />}
          {clicked
          && <Typography>Connecting to the ethereum blockchain; this may take a while</Typography>}
          <Typography sx={{ mt: 1 }} variant="subtitle2" align="left"> Already have an account? <Link component={RouterLink} to="/login"> Log in</Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
