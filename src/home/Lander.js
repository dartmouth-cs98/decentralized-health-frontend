import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../common/Header';
// import CustomSpinner from '../common/CustomSpinner';

const pageStyle = {
  margin: '100px 20px 30px 10px',
  display: 'flex',
  flexDirection: 'row',
  overFlow: 'hidden',
};

const btnstyle = {
  margin: '8px 0',
  marginBottom: '50px',
};

const useStyles = makeStyles({
  tagLine: {
    background: '-webkit-linear-gradient(#11ADF1, #CC14FA)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontWeight: 'bold',
  },
});

const LandingPage = () => {
  const classes = useStyles();

  return (
    <div style={pageStyle}>
      <Header />
      <div>
        <Typography className={classes.tagLine} variant="h1">Medical record storage for the next generation of the internet</Typography>

        <Box sx={{
          // justifyContent: 'center',
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(2, 250px)',
          marginTop: 2,
        }}
        >

          <Link sx={{ justifySelf: 'center' }} to="signup">
            <Button
              type="button"
              variant="contained"
              style={btnstyle}
              fullWidth
            >Sign Up
            </Button>
          </Link>
          {/* <div style={{ textAlign: 'center' }}>Or...</div> */}
          <Link to="login">
            <Button
              type="button"
              variant="contained"
              style={btnstyle}
              fullWidth
            >Login
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default LandingPage;
