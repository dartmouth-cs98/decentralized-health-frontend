import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../common/Header';
import image from '../images/landing_img.jpg';
import InfoPopover from '../common/InfoPopover';
import { frontPage } from '../common/InfoText';

const pageStyle = {
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'row',
  overFlow: 'hidden',
};

const loginStyle = {
  position: 'absolute',
  justifySelf: 'center',
  margin: '5% 0 0 5%',
  maxWidth: '60%',
  // height: 'fit-content',
  // width: 'fit-content',
};

const imgStyle = {
  width: '100%',
  objectFit: 'cover',
  opacity: 0.1,
};

const btnstyle = {
  margin: '8px 0',
};

const LandingPage = () => {
  return (
    <div style={pageStyle}>
      <Header />
      <img style={imgStyle} src={image} alt="landing page" />
      <div style={loginStyle}>
        <Typography sx={{ background: '--webkit-linear-gradient(#11adf1, #cc14fa)' }} variant="h1">Welcome to Med 3.0</Typography>
        <Box component="div" sx={{ visibility: 'hidden' }}>
          Visibility Hidden
        </Box>
        <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }} color="black" variant="h6">Problem</Typography>
        <Typography sx={{ maxWidth: '80%' }} color="#000" variant="p">
          How might we create an efficient and streamlined way for doctors and medical practioners to have access to patient data?
        </Typography>

        <Box component="div" sx={{ visibility: 'hidden' }}>
          Visibility Hidden
        </Box>
        <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }} color="black" variant="h6">Solution</Typography>
        <Typography sx={{ maxWidth: '80%' }} color="black" variant="p">
          We decided to put patient data on the blockchain. Through the web extension metamask we have created a streamlined system in which,
          medical practioners with the appropriate permission are able to access any patient data that is contained on the blockchain.
        </Typography>
        <InfoPopover style={{ marginTop: '25px', marginBottom: '40px' }}>{frontPage}</InfoPopover>
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
