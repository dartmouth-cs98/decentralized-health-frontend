import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EmptyState = (props) => {
  return (
    <Box sx={{
      marginTop: '2.5%',
      display: 'flex',
      backgroundColor: '#E3ECF9',
      minHeight: '55vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Typography align="center" variant="caption">{props.title}</Typography>
    </Box>
  );
};

export default EmptyState;
