import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../common/Header';

const loginStyle = {
  padding: 20, height: 'fit-content', width: 'fit-content', margin: '5% auto',
};

const btnstyle = {
  margin: '8px 0',
};

const LandingPage = () => {
  return (
    <>
      <Header />
      <div style={loginStyle}>
        <h1>Welcome to Med 3.0</h1>
        <Link to="signup">
          <Button
            type="button"
            variant="contained"
            style={btnstyle}
            fullWidth
          >Sign Up
          </Button>
        </Link>
        <div>Or...</div>
        <Link to="login">
          <Button
            type="button"
            variant="contained"
            style={btnstyle}
            fullWidth
          >Login
          </Button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
