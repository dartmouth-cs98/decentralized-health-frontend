import { signUp } from '../common/InfoText';

const steps = [
  {
    content: 'This is a guided tour of our site. You can quit this tour at any time by clicking exit.',
    // disableBeacon: true,
    event: 'click',
    target: '#tour-start',
    title: 'Welcome to Med3.0',
  },

  {
    content: 'This will take you to our sign up page',
    // event: 'click',
    // disableBeacon: true,
    target: '#tour-signup',
    title: 'Proceed to sign up',
  },

  {
    content: `${signUp}`,
    placement: 'right',
    target: '#tour-signup-actual',
    title: 'Signing up',
  },
];

export default steps;
