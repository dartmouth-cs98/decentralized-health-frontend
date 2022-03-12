import React, { useEffect, useState } from 'react';
import { useNavigate, Link as routerLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import { skipToken } from '@reduxjs/toolkit/query';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
// import FormHelperText from '@mui/material/FormHelperText';
import Snackbar from '@mui/material/Snackbar';
import Header from '../common/Header';
import { useGetAdminInfoQuery } from '../admin/adminContractApi';
import { useGetPatientInfoQuery } from '../patient/patientContractApi';
// import { useSignInUserQuery } from './userApi';
import getWeb3 from '../web3/getWeb3';
import { ERR_CODES } from '../constants';
import image from '../images/HeaderBg.png';
import CustomSpinner from '../common/CustomSpinner';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [address, setAddress] = useState(null);
  const navigate = useNavigate();
  // const { data, isSuccess } = useSignInUserQuery(address ? { email, password, ethAddress: address } : skipToken);
  // const [invalidEmail, setInvalidEmail] = useState(false);
  // const [invalidPassword, setInvalidPassword] = useState(false);
  const [isAccountInValid, setIsAccountInvalid] = useState(false);
  const [alert, setAlert] = useState(false);
  const [loginError, setLoginError] = useState({ code: '', message: '' });
  const { data: patientData, isLoading: patientLoading, error: patientError } = useGetPatientInfoQuery();
  const { data: adminData, isLoading: adminLoading, error: adminError } = useGetAdminInfoQuery();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // do nothing
    if (clicked) {
      if (!patientLoading && patientData) {
        navigate('/patient');
      } else if (!adminLoading && adminData) {
        navigate('/admin');
      } else if (patientError || adminError) {
        const message = 'Make sure you are signed up as a user';
        setLoginError({ message, code: '' });
        setIsAccountInvalid(true);
      }

      if (loginError) {
        console.log('error');
        setClicked(false);
        setAlert(true);
      }
    }
  }, [patientLoading, patientData, adminData, adminLoading, navigate, clicked, loginError, patientError, adminError]);

  // useEffect(() => {
  //   if (isSuccess && data.length > 0) {
  //     const user = data[0];
  //     localStorage.setItem('token', user.token);
  //     if (user.is_admin) {
  //       navigate('/admin');
  //     } else {
  //       navigate('/patient');
  //     }
  //   }
  // }, [data, isSuccess, navigate]);

  // const validateEmail = () => {
  //   return email.match(
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //   );
  // };

  const resetError = () => {
    // setInvalidEmail(false);
    // setInvalidPassword(false);
    setIsAccountInvalid(false);
  };

  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const handleClose = () => {
    setAlert(false);
  };

  const validateInput = () => {
    const valid = true;
    resetError();
    // if (!validateEmail()) {
    //   setInvalidEmail(true);
    //   valid = false;
    // }
    // if (password === '') {
    //   setInvalidPassword(true);
    //   valid = false;
    // }

    // if (!data || data.length === 0) {
    //   valid = false;
    //   setIsAccountInvalid(true);
    //   setLoginError({ code: '', message: 'Invalid account details. Please check your login info' });
    //   setAlert(true);
    // }
    return valid;
  };

  const signIn = async (event) => {
    resetError();
    try {
      if (!isMetaMaskInstalled()) {
        setIsAccountInvalid(true);
        setLoginError({ code: ERR_CODES.METAMASK_UNINSTALLED, message: 'Metamask is not installed' });
        setAlert(true);
      } else {
        const web3response = await getWeb3();
        const {
          ethAddress, code,
        } = web3response;
        // setAddress(ethAddress);
        if (code === -32002 || !ethAddress) {
          const message = 'MetaMask - RPC Error: Make sure you\'re signed into your Metamask Wallet';
          setIsAccountInvalid(true);
          setLoginError({ message, code });
          setAlert(true);
        } else if (validateInput()) {
          setClicked(true);
        } else {
          console.log('invalid');
        }
      }
    } catch (error) {
      console.log('error in signing in');
      console.log(error);
    }
  };

  return (
    <Box sx={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      <Header />
      <Box sx={{
        height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Paper elevation={10}
          sx={{
            padding: '25px', height: '300px', width: '350px', backgroundColor: '#ffffff7a', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}
        >
          <Typography marginBottom="10px" variant="h1">Login</Typography>
          {/* <Box display="flex">
            <Typography mr={0.5} display="flex" fontWeight="bold" align="left" gutterBottom>Email</Typography>
            <Typography fontWeight="bold" color="red"> *</Typography>
          </Box> */}
          {/* <FormControl margin="dense" fullWidth>
            <TextField
              size="small"
              placeholder="Enter email"
              onChange={(event) => { setEmail(event.target.value); }}
              fullWidth
            />
            <FormHelperText error>{invalidEmail && 'Enter a valid email' }</FormHelperText>
          </FormControl> */}
          {/* <Box display="flex">
            <Typography mr={0.5} display="flex" fontWeight="bold" align="left" gutterBottom>Password</Typography>
            <Typography fontWeight="bold" color="red">*</Typography>
          </Box>
          <FormControl margin="dense" fullWidth>
            <TextField size="small"
              placeholder="Enter password"
              type="password"
              onChange={(event) => { setPassword(event.target.value); }}
              fullWidth
            />
            {invalidPassword && <FormHelperText error>Password Required</FormHelperText> }
          </FormControl> */}
          {/* <Typography align="left">
            <Link variant="subtitle2" href="#">
              Forgot password ?
            </Link>
          </Typography> */}
          <Button type="submit" color="primary" variant="contained" sx={{ mt: 1.5 }} fullWidth onClick={signIn}>Connect to wallet</Button>
          <Typography sx={{ mt: 2 }} variant="subtitle2" align="left"> New to Med 3.0? Create a new account <Link component={routerLink} to="/signup"> here</Link>
          </Typography>
          {clicked && <CustomSpinner style={{ width: '50%', margin: 'auto' }} />}
        </Paper>
        {isAccountInValid
      && (
        <Snackbar
          open={alert}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleClose}
          key="top center"
        >
          <Alert icon={false} onClose={handleClose} severity="error">
            {loginError.message}
            {loginError.code === ERR_CODES.METAMASK_UNINSTALLED && <Link target="_blank" color="error" rel="noopener" underline="none" href="https://metamask.io/download/"> Install MetaMask</Link>}
          </Alert>
        </Snackbar>
      )}
      </Box>
    </Box>
  );
};

export default Login;
