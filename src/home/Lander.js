// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
// https://9elements.com/blog/pure-css-diagonal-layouts/
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import Header from '../common/Header';
import HeaderBg from '../images/HeaderBg.png';
import { ReactComponent as SecureIcon } from '../icons/Secure.svg';
import { ReactComponent as InteropableIcon } from '../icons/Interopable.svg';
import { ReactComponent as AccessibleIcon } from '../icons/Accessible.svg';
import { ReactComponent as CostEffectiveIcon } from '../icons/Cost-Effective.svg';
import { ReactComponent as EmailIcon } from '../icons/carbon_email.svg';
import { ReactComponent as MediumIcon } from '../icons/Medium.svg';

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
  shadedBg: {
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
  plainBg: {
    margin: `${padding}em 0`,
    position: 'relative',
    padding: '1.5em',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    'max-width': `${contentWidth}em`,
    padding: `${padding}em 0`,
    position: 'relative',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '40em',
  },
});

const Purple = styled.span`
  color: #d00eef;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AvatarPair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  width: 5em;
  height: 5em;
`;

const Row = styled.div`
  width: 60em;
`;

const LandingPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const startTourRef = useRef(null);

  const startTour = () => {
    dispatch(tourStarted());
  };

  // const scrollToStartTourButton = () => {
  //   startTourRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className={classes.pageBg}>
      <Header position="fixed" />
      <Box className={classes.pageContent}>
        <Box component="header" className={classes.header}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography fontWeight="bold" align="center" sx={{ mt: 2, fontSize: 72, maxWidth: '80%' }} className={classes.tagLine} variant="h1">Medical record storage on the new web</Typography>
            <Typography fontWeight="bold" align="center" sx={{ fontSize: '1.25rem', mt: 3, maxWidth: '50%' }}>Med 3.0 is an innovative, secure and accessible medical records storage platform built on the ethereum blockchain</Typography>
          </Box>
          <Box>
            <Button
              id="tour-start"
              onClick={startTour}
              ref={startTourRef}
              color="primary"
              variant="contained"
              size="large"
              sx={{ mr: 2, mt: 8, width: '12em' }}
            >Get started
            </Button>
            <Link style={{ textDecoration: 'none' }} to="/signup">
              <Button
                color="primary"
                id="tour-signup"
                variant="contained"
                size="large"
                sx={{ ml: 2, mt: 8, width: '12em' }}
              >Sign up
              </Button>
            </Link>
          </Box>
        </Box>

        <section className={classes.shadedBg}>
          <div className={classes.textContent}>
            <SecureIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Secure
            </Typography>
            <Typography align="center" margin="normal" sx={{ fontSize: '1.2rem' }}>
              Medical data in the form of Electronic Health Records stored within <Purple>centralized databases are prone to hacks.</Purple>
              <br /> <br />
              These databases can be accessed by employees who can view sensitive information aboutpatients and can be deceived into giving away
              their access. The <Purple>integrity of data stored on the blockchain is ensured using modern encryption standards</Purple> and
              can only be decrypted by those whom are granted permission to. Patients can have full control over who can access their data and have greater confidence in the system used to store their records.
            </Typography>
          </div>
        </section>

        <section className={classes.plainBg}>
          <div className={classes.textContent}>
            <AccessibleIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Accessible
            </Typography>
            <Typography align="center" margin="normal" sx={{ fontSize: '1.2rem' }}>
              Patients struggle to view their records and often have to contact their hospitals to view data that should be readily accessible to them in the event of an emergency.
              <br /> <br />
              Medical record data on the blockchain becomes <Purple>accessible from any computer</Purple> around the world with an internet connection. This means that medical data
              is accessible by both doctors and patients regardless of their location which can be a powerful tool during time-sensitive medical emergencies so that hospitals around the world can give tailored medical treatment.
            </Typography>
          </div>
        </section>

        <section className={classes.shadedBg}>
          <div className={classes.textContent}>
            <InteropableIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Interopable
            </Typography>
            <Typography align="center" margin="normal" sx={{ fontSize: '1.2rem' }}>
              Hospitals struggle to coordinate to share medical data in a secure and reliable fashion. his is a source of administrative costs since labour is required to perform this simple task.
              <br /> <br />
              The blockchain is able to <Purple>unify medical record storage</Purple> and allow hospitals to share the same data in a secure manner without the need of manually transferring data.
              This can also <Purple>improve the accessibility of medical data</Purple> for research purposes and automate the transfer of data.
            </Typography>
          </div>
        </section>

        <section className={classes.plainBg}>
          <div className={classes.textContent}>
            <CostEffectiveIcon />
            <Typography color="primary"
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Cost Effective
            </Typography>
            <Typography align="center" margin="normal" sx={{ fontSize: '1.2rem' }}>
              In 2020 the US government spent over <Purple>$4 Trillion on healthcare.</Purple> Administrative costs account for 8.3% of this expenditure, amounting to over $332 Bn. This expenditure is used to pay for the management and labour costs of transferring medical data between hospitals.
              <br /> <br />
              Since the blockchain <Purple>eliminates the need for manual data transfer,</Purple> hospitals save money on labour and data storage which would drastically <Purple>reduce the $332 Bn spent</Purple> each year on healthcare administration.
              If a global standard for medical data were to be created, global healthcare could be standardised, and savings on administrative costs could be reinvested into the healthcare system.
            </Typography>
          </div>
        </section>

        <section className={classes.shadedBg}>
          <div className={classes.textContent}>
            <Typography
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Team
            </Typography>
            <Row />
            <Grid container rowSpacing={6}>
              <Grid item xs={2}>
                <AvatarPair>
                  <StyledAvatar />
                  <Typography sx={{ fontWeight: 'bold' }}>Sarh Jadsf</Typography>
                </AvatarPair>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={2}>
                <AvatarPair>
                  <StyledAvatar />
                  <Typography sx={{ fontWeight: 'bold' }}>Sarh Jadsf</Typography>
                </AvatarPair>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={2}>
                <AvatarPair>
                  <StyledAvatar />
                  <Typography sx={{ fontWeight: 'bold' }}>Sarh Jadsf</Typography>
                </AvatarPair>
              </Grid>
              <Grid item xs={2} />

              <Grid item xs={2} />
              <Grid item xs={2}>
                <AvatarPair>
                  <StyledAvatar />
                  <Typography sx={{ fontWeight: 'bold' }}>Sarh Jadsf</Typography>
                </AvatarPair>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={2}>
                <AvatarPair>
                  <StyledAvatar />
                  <Typography sx={{ fontWeight: 'bold' }}>Sarh Jadsf</Typography>
                </AvatarPair>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={2}>
                <AvatarPair>
                  <StyledAvatar />
                  <Typography sx={{ fontWeight: 'bold' }}>Sarh Jadsf</Typography>
                </AvatarPair>
              </Grid>
            </Grid>
          </div>
        </section>

        <section className={classes.plainBg}>
          <div className={classes.textContent}>
            <Typography
              sx={{
                fontWeight: 900, mt: 2, mb: 4,
              }}
              variant="h1"
            >Contact
            </Typography>
            <div className={classes.contactInfo}>
              <div>
                <EmailIcon />
                <Typography>Email us</Typography>
              </div>
              <div>
                <MediumIcon />
                <Typography>Learn more about this project</Typography>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </div>
  );
};

export default LandingPage;
