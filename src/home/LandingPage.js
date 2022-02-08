import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../common/Header';
import image from '../images/landing_img.jpg';
import InfoPopover from '../common/InfoPopover';
import {
  frontPage, probPrompt, prob1, prob1Content, prob2, prob2Content, prob3, prob3Content, prob4, prob4Content, sol1Content, sol2Content, sol3Content, sol4Content,
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
};

const caroStyle = {
  color: 'black',
};

const caroImgStyle = {
  opacity: 0,
};

const LandingPage = () => {
  return (
    <div style={pageStyle}>
      <Header />
      <img style={imgStyle} src={image} alt="landing page" />
      <div style={loginStyle}>
        <Typography sx={{ background: '--webkit-linear-gradient(#11adf1, #cc14fa)' }} variant="h1">Welcome to Med 3.0</Typography>
        {/* <Box component="div" sx={{ visibility: 'hidden' }}>
          Visibility Hidden
        </Box> */}
        <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }} color="black" variant="h6">{ probPrompt }</Typography>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Second slide"
              style={caroImgStyle}
            />
            <Carousel.Caption>
              <h5 style={caroStyle}>Problem #1</h5>
              <h5 style={caroStyle}>{ prob1 }</h5>
              <p style={caroStyle}>{ prob1Content }</p>
              <h5 style={caroStyle}>Solution:</h5>
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
            <Carousel.Caption>
              <h5 style={caroStyle}>Problem #2</h5>
              <h5 style={caroStyle}>{ prob2 }</h5>
              <p style={caroStyle}>{ prob2Content }</p>
              <h5 style={caroStyle}>Solution:</h5>
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
            <Carousel.Caption>
              <h5 style={caroStyle}>Problem #3</h5>
              <h5 style={caroStyle}>{ prob3 }</h5>
              <p style={caroStyle}>{ prob3Content }</p>
              <h5 style={caroStyle}>Solution:</h5>
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
            <Carousel.Caption>
              <h5 style={caroStyle}>Problem #4</h5>
              <h5 style={caroStyle}>{ prob4 }</h5>
              <p style={caroStyle}>{ prob4Content }</p>
              <h5 style={caroStyle}>Solution:</h5>
              <p style={caroStyle}>{ sol4Content }</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="First slide"
              style={caroImgStyle}
            />
            <Carousel.Caption>
              <h3 style={caroStyle}>First slide label</h3>
              <p style={caroStyle}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Second slide"
              style={caroImgStyle}
            />

            <Carousel.Caption>
              <h3 style={caroStyle}>Second slide label</h3>
              <p style={caroStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Third slide"
              style={caroImgStyle}
            />
            <Carousel.Caption>
              <h3 style={caroStyle}>Third slide label</h3>
              <p style={caroStyle}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="Third slide"
              style={caroImgStyle}
            />
            <Carousel.Caption>
              <h3 style={caroStyle}>Fourth slide label</h3>
              <p style={caroStyle}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
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
