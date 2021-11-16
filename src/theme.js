import { createTheme } from '@mui/material/styles';

// TODO: size down the headers
// Styling constants
// Temporary
const primaryMain = '#01056B';
const secondaryMain = '#d00eef';
const font = '\'Raleway\', sans-serif';

const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
  typography: {
    // fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    // fontFamilyCode: 'Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace',
    // fontFamilySystem: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    // fontFamilyTagline: '"PlusJakartaSans-ExtraBold",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    // body1: {
    //   fontSize: '1rem',
    //   fontWeight: 400,
    //   letterSpacing: 0,
    //   lineHeight: 1.5,
    // },
    fontFamily: font,
    fontSize: 14,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      color: primaryMain,
      fontSize: 'clamp(2.3rem, 1.2857rem + 3.5714vw, 4rem)',
      lineHeight: 1.1142857142857143,
    },
    h2: {
      fontSize:
      'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
      lineHeight: 1.2222222222222223,
    },
    h3: {
      fontSize:
      '1.4rem',
      lineHeight: 1.2222222222222223,
      letterSpacing: 0,
    },
    h4: {
      fontSize:
      '1.75rem',
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h5: {
      fontSize:
      '1.5rem',
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h6: {
      fontSize: '1.25rem',
      letterSpacing: 0,
      lineHeight: 1.5,
    },
  },
};

export default createTheme(themeOptions);
