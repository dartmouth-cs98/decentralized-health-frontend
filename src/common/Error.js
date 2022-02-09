import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Error = ({ message }) => (
  <>
    <Alert severity="error">
      <AlertTitle>Something&apos;s wrong</AlertTitle>
      {message}
    </Alert>
  </>
);

export default Error;
