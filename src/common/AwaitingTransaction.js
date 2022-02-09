import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import CustomSpinner from './CustomSpinner';

const AwaitingTransaction = ({ message }) => {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardContent sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', flexmargin: 4,
        }}
        >
          <Typography align="center" sx={{ fontSize: 25 }} color="text.primary" gutterBottom>
            Awaiting Transaction
          </Typography>
          <Typography align="center" component="div" sx={{ margin: '0 0  5px 0' }}>
            <CustomSpinner />
          </Typography>
          <Typography>
            {message}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AwaitingTransaction;
