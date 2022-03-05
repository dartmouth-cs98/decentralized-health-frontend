// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
// https://9elements.com/blog/pure-css-diagonal-layouts/
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Header from '../common/Header';
import HeaderBg from '../images/HeaderBg.png';
import { ReactComponent as SecureIcon } from '../icons/Secure.svg';
import { ReactComponent as InteropableIcon } from '../icons/Interopable.svg';
import { ReactComponent as AccessibleIcon } from '../icons/Accessible.svg';
import { ReactComponent as CostEffectiveIcon } from '../icons/Cost-Effective.svg';

import {
  tourStarted,
} from '../joyride/tourSlice';

function getTanFromDegrees(degrees) {
  return Math.tan(degrees * Math.PI / 180);
}

const skewAngle = 5;
const contentWidth = 53;
const padding = getTanFromDegrees(skewAngle) * contentWidth / 2;
// const secureImageHeight = 30;

const useStyles = makeStyles({
  header: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: `url(${HeaderBg})`,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  pageBg: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5fa',
    overflow: 'hidden',
    margin: 0,
  },
  pageContent: {
    // margin: '100px 20px 30px 10px',
    overFlow: 'hidden',
  },
  tagLine: {
    // background: '-webkit-linear-gradient(#11ADF1, #CC14FA)',
    // '-webkit-background-clip': 'text',
    // '-webkit-text-fill-color': 'transparent',
    // fontWeight: '900px',
  },
  secureBg: {
    margin: `${padding}em 0`,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '1.5em',

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
    alignItems: 'center',
    'max-width': `${contentWidth}em`,
    // margin: '0 auto',
    // padding: '10em',
    padding: `${padding}em 0`,
    position: 'relative',
    // transform: 'skewY(11deg)',
  },
  secureText: {
    display: 'flex',
    // flexDirection: 'row',
    justifySelf: 'center',
  },
  secureImage: {
    margin: '5em 0 0 0',
    transform: 'rotate(35deg)',
  },

  accessibleBg: {
    margin: `${padding}em 0`,
    position: 'relative',
    padding: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',

  },
  accessibleContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    'max-width': `${contentWidth}em`,
    margin: '0 auto',
    padding: `${padding}em 0`,
    position: 'relative',
  },
  accessibleText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  interopableBg: {
    // height: '50em',
    margin: `${padding}em 0`,
    position: 'relative',
    padding: '1.55em',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '0',
      // height: '80vh',
      left: '0',
      bottom: '0',
      'background-color': '#ebebfc',
      transform: `skewY(${-1 * skewAngle}deg)`,
    },
  },
  interopableContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    'max-width': `${contentWidth}em`,
    margin: '0 auto',
    // padding: '10em',
    padding: `${padding}em 0`,
    position: 'relative',
    // transform: 'skewY(11deg)',
  },
  interopableText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
      <Header position="fixed" />
      <Box className={classes.pageContent}>
        <Box component="header" className={classes.header}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography fontWeight="bold" align="center" sx={{ mt: 2, fontSize: 72, maxWidth: '80%' }} className={classes.tagLine} variant="h1">Medical record storage on the new web</Typography>
            <Typography fontWeight="bold" align="center" sx={{ mt: 3, maxWidth: '50%' }} variant="h6">Med 3.0 provides an innovative, secure and accessible medical records storage platform built on the blockchain</Typography>
          </Box>
          <Box>
            <Button
              color="primary"
              onClick={scrollToStartTourButton}
              variant="contained"
              size="large"
              sx={{ mr: 2, mt: 8, width: '12em' }}
            >Sign In
            </Button>
            <Button
              color="primary"
              onClick={scrollToStartTourButton}
              variant="contained"
              size="large"
              sx={{ ml: 2, mt: 8, width: '12em' }}
            >Get started
            </Button>
          </Box>
        </Box>

        <section className={classes.secureBg}>
          <div className={classes.secureContent}>
            <SecureIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              gutterbottom
              variant="h1"
            >Secure
            </Typography>
            <div className={classes.secureText}>
              <Typography align="center" margin="normal" variant="h3">
                Medical data can come in a physical form or within Electronic Health Records which are stored within centralized databases which are prone to be targeted or hacked.
                These databases can be accessed by employees who can view sensitive information about patients and can be deceived into giving away their access.
                <br /> <br />
                The integrity of data stored on the blockchain is ensured using modern encryption standards and can only be decrypted by those whom are granted permission to.
                Patients can have full control over who can access their data and have greater confidence in the system used to store their records.
              </Typography>
            </div>
          </div>
        </section>

        <section className={classes.accessibleBg}>
          <div className={classes.accessibleContent}>
            <AccessibleIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Accessible
            </Typography>
            <div className={classes.accessibleText}>
              <Typography align="center" margin="normal" variant="h3">
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
            <InteropableIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Interopable
            </Typography>
            <div className={classes.interopableText}>
              <Typography align="center" margin="normal" variant="h3">
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
            <CostEffectiveIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Low-cost
            </Typography>
            <div className={classes.accessibleText}>
              <Typography align="center" margin="normal" variant="h3">
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
