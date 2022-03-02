// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
// https://9elements.com/blog/pure-css-diagonal-layouts/
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'mui-image';
import { useDispatch } from 'react-redux';
import Header from '../common/Header';
import accessible from '../images/accessible.jpg';
import interopable from '../images/inter4.jpg';
import secure from '../images/secure.jpg';
import lowCost from '../images/low_cost.jpg';
import {
  tourStarted,
} from '../joyride/tourSlice';
// import CustomSpinner from '../common/CustomSpinner';

function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}

const skewAngle = 10;
const contentWidth = 53;
const padding = getTanFromDegrees(skewAngle) * contentWidth / 2;
const secureImageHeight = 30;

const useStyles = makeStyles({
  header: {

  },
  pageBg: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5fa',
    overflow: 'hidden',
  },
  pageContent: {
    margin: '100px 20px 30px 10px',
    overFlow: 'hidden',
  },
  tagLine: {
    background: '-webkit-linear-gradient(#11ADF1, #CC14FA)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontWeight: 'bold',
    position: 'relative',
  },
  secureBg: {
    margin: `${padding}em 0`,
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '0',
      left: '0',
      bottom: '0',
      'background-color': '#ebebfc',
      transform: `skewY(${-1 * skewAngle}deg)`,
    },

  },
  secureContent: {
    display: 'flex',
    flexDirection: 'column',
    'max-width': `${contentWidth}em`,
    margin: '0 auto',
    // padding: '10em',
    padding: `${padding}em 0`,
    position: 'relative',
    // transform: 'skewY(11deg)',
  },
  secureText: {
    display: 'flex',
    flexDirection: 'row',
  },
  secureImage: {
    margin: '5em 0 0 0',
    transform: 'rotate(35deg)',
  },

  accessibleBg: {
    margin: `${padding}em 0`,
    position: 'relative',
  },
  accessibleContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    'max-width': `${contentWidth}em`,
    margin: '0 auto',
    padding: `${padding}em 0`,
    position: 'relative',
  },
  accessibleText: {
    display: 'flex',
    flexDirection: 'row',
  },
  accessibleImage: {
    margin: '5em 0 0 0',
    'border-radius': '50%',
    transform: 'rotate(-5deg)',
  },

  interopableBg: {
    height: '50em',
    margin: `${padding}em 0`,
    position: 'relative',

    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '100vh',
      top: '0',
      right: '0',
      left: '0',
      bottom: '0',
      'background-image': `url(${interopable})`,
      transform: `skewY(${-1 * skewAngle}deg)`,
    },
  },
  interopableContent: {
    display: 'flex',
    flexDirection: 'column',
    'max-width': `${contentWidth}em`,
    margin: '0 auto',
    // padding: '10em',
    padding: `${padding}em 0`,
    position: 'relative',
    // transform: 'skewY(11deg)',
  },
  interopableText: {
    color: 'white',
  },
  interopableImage: {
    margin: '5em 0 0 0',
    transform: 'rotate(35deg)',
  },

  lowCostImage: {
    borderRadius: '30%',
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const startTourRef = useRef(null);

  const startTour = () => {
    dispatch(tourStarted());
  };

  const scrollToStartTourButton = () => {
    startTourRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.pageBg}>
      <Header position="relative" />
      <Box className={classes.pageContent}>
        <Box component="header" className={classes.header}>
          <Typography className={classes.tagLine} variant="h1">Medical record storage on the new web</Typography>
          <Typography>Med3.0 is the first medical records storage platform built on the ethereum blockchain.</Typography>
          <Button
            color="secondary"
            onClick={scrollToStartTourButton}
            variant="contained"
            size="large"
          >Get started
          </Button>
        </Box>

        <section className={classes.secureBg}>
          <div className={classes.secureContent}>
            <Typography color="secondary" sx={{ fontWeight: 'bold' }} variant="h2">Secure</Typography>
            <div className={classes.secureText}>
              <Typography sx={{ width: '50%' }}>
                Medical data can come in a physical form or within Electronic Health Records which are stored within centralized databases which are prone to be targeted or hacked.
                These databases can be accessed by employees who can view sensitive information about patients and can be deceived into giving away their access.
                <br /> <br />
                The integrity of data stored on the blockchain is ensured using modern encryption standards and can only be decrypted by those whom are granted permission to.
                Patients can have full control over who can access their data and have greater confidence in the system used to store their records.
              </Typography>
              <Image className={classes.secureImage} src={secure} width="50%" height={`${secureImageHeight}em`} />
            </div>
          </div>
        </section>

        <section className={classes.accessibleBg}>
          <div className={classes.accessibleContent}>
            <Typography color="primary" sx={{ fontWeight: 'bold' }} variant="h2">Accessible</Typography>
            <div className={classes.accessibleText}>
              <Image className={classes.accessibleImage} src={accessible} width="50%" height={`${secureImageHeight}em`} />
              <Typography sx={{ width: '50%' }}>
                Patients struggle to view their records and often have to contact their hospitals to view data that should be readily accessible to them in the event of an emergency.
                <br /> <br />
                Medical record data on the blockchain becomes accessible from any computer around the world with an internet connection.
                This means that medical data is accessible by both doctors and patients regardless of their location which can be a powerful tool during time-sensitive
                medical emergencies so that hospitals around the world can give tailored medical treatment.
              </Typography>
            </div>
          </div>
        </section>

        <section className={classes.interopableBg}>
          <div className={classes.interopableContent}>
            <Typography color="secondary" sx={{ fontWeight: 'bold' }} variant="h2">Interopable</Typography>
            <div className={classes.interopableText}>
              <Typography sx={{ width: '70%' }}>
                Hospitals struggle to coordinate to share medical data in a secure and reliable fashion.
                This is a source of administrative costs since labour is required to perform this simple task.
                <br /> <br />
                The blockchain is able to unify medical record storage and allow hospitals to share the same data in a secure manner without the need of manually transferring data.
                This can also improve the accessibility of medical data for research purposes and automate the transfer of data.
              </Typography>
            </div>
          </div>
        </section>

        <section className={classes.accessibleBg}>
          <div className={classes.accessibleContent}>
            <Typography color="primary" sx={{ fontWeight: 'bold' }} variant="h2">Low-cost</Typography>
            <div className={classes.accessibleText}>
              <Image className={classes.lowCostImage} src={lowCost} width="50%" height={`${secureImageHeight}em`} />
              <Typography sx={{ width: '50%' }}>
                In 2020 the US government spent over $4 Trillion on healthcare. Administrative costs account for 8.3% of this expenditure, amounting to over $332 Bn.
                This expenditure is used to pay for the management and labour costs of transferring medical data between hospitals.
                <br /> <br />
                Since the blockchain eliminates the need for manual data transfer,
                hospitals save money on labour and data storage which would drastically reduce the $332 Bn spent each year on healthcare administration.
                If a global standard for medical data were to be created, global healthcare could be standardised, and savings on administrative costs could be reinvested into the healthcare system.
              </Typography>
            </div>
          </div>
        </section>

        <Typography>Ready to get started? If you&apos;re new to our website, you can take a guided tour of the website that walks you through signing up as a new user. You can also explore it on your own!</Typography>

        <Box sx={{
          // justifyContent: 'center',
          display: 'grid',
          gap: 1,
          gridTemplateColumns: 'repeat(3, 150px)',
          marginTop: 2,
        }}
        >
          <Button id="tour-start"
            color="secondary"
            onClick={startTour}
            variant="contained"
            ref={startTourRef}
            size="large"
          >Start tour
          </Button>

          <Link style={{ textDecoration: 'none' }} to="signup">
            <Button
              id="tour-signup"
              type="button"
              variant="contained"
              size="large"
            >Sign Up
            </Button>
          </Link>
          {/* <div style={{ textAlign: 'center' }}>Or...</div> */}
          <Link style={{ textDecoration: 'none' }} to="login">
            <Button
              type="button"
              variant="contained"
              size="large"
            >Login
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
