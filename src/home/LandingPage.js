import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carousel from 'react-bootstrap/Carousel';
import { ShepherdTourContext } from 'react-shepherd';
import Header from '../common/Header';
import image from '../images/landing_img.jpg';
import {
  probPrompt, prob1, prob1Content, prob2, prob2Content, prob3, prob3Content, prob4, prob4Content, sol1Content, sol2Content, sol3Content, sol4Content,
} from '../common/InfoText';

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
  marginBottom: '50px',
};

const caroStyle = {
  color: 'black',
  textAlign: 'left',
};

const caroTitleStyle = {
  color: 'black',
  textAlign: 'center',
};

const caroImgStyle = {
  opacity: 0,
  height: 'auto',
  paddingBottom: '100px',
};

const caroCaptionStyle = {
  top: 0,
  bottom: 'auto',
};

const LandingPage = () => {
  const tour = useContext(ShepherdTourContext);

  return (
    <div style={pageStyle}>
      <Header />
      <img style={imgStyle} src={image} alt="landing page" />
      <div style={loginStyle}>
        <Typography sx={{ background: '--webkit-linear-gradient(#11adf1, #cc14fa)', marginBottom: '15px' }} variant="h1">Welcome to Med 3.0</Typography>
        {/* <Box component="div" sx={{ visibility: 'hidden' }}>
          Visibility Hidden
        </Box> */}
        <Typography sx={{ flexGrow: 1, fontWeight: 'bold', marginBottom: '15px' }} color="black" variant="h6">{ probPrompt }</Typography>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Second slide"
              style={caroImgStyle}
            />
            <Carousel.Caption style={caroCaptionStyle}>
              <h5 style={caroTitleStyle}>Problem #1</h5>
              <h5 style={caroStyle}>{ prob1 }</h5>
              <p style={caroStyle}>{ prob1Content }</p>
              <h5 style={caroStyle}>Solution</h5>
              <p style={caroStyle}>{ sol1Content }</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Second slide"
              style={caroImgStyle}
            />
            <Carousel.Caption style={caroCaptionStyle}>
              <h5 style={caroTitleStyle}>Problem #2</h5>
              <h5 style={caroStyle}>{ prob2 }</h5>
              <p style={caroStyle}>{ prob2Content }</p>
              <h5 style={caroStyle}>Solution</h5>
              <p style={caroStyle}>{ sol2Content }</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Second slide"
              style={caroImgStyle}
            />
            <Carousel.Caption style={caroCaptionStyle}>
              <h5 style={caroTitleStyle}>Problem #3</h5>
              <h5 style={caroStyle}>{ prob3 }</h5>
              <p style={caroStyle}>{ prob3Content }</p>
              <h5 style={caroStyle}>Solution</h5>
              <p style={caroStyle}>{ sol3Content }</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Second slide"
              style={caroImgStyle}
            />
            <Carousel.Caption style={caroCaptionStyle}>
              <h5 style={caroTitleStyle}>Problem #4</h5>
              <h5 style={caroStyle}>{ prob4 }</h5>
              <p style={caroStyle}>{ prob4Content }</p>
              <h5 style={caroStyle}>Solution</h5>
              <p style={caroStyle}>{ sol4Content }</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Button id="tour-start" onClick={tour.start}>Start tour</Button>
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
