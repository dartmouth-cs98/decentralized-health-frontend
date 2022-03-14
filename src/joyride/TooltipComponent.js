import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Don't show the next and back buttons when on these steps
// These are likely to be steps before and after navigating to a new route
const skipNextArray = [3, 7, 8, 10, 14, 16, 17];
const skipBackArray = [4, 8, 9, 11, 15, 17, 18];

const Tooltip = ({
  continuous,
  index,
  size,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  isLastStep,
  skipProps,
}) => (
  <Card {...tooltipProps} sx={{ maxWidth: '350px' }}>
    <CardContent>
      <Typography color="primary" sx={{ fontSize: 16 }}>{index + 1} / {size}</Typography>
      {step.title && (
      <Typography
        color="primary"
        variant="h2"
        sx={{
          margin: '10px 0 0 0', textAlign: 'center', fontWeight: 'bold',
        }}
      >{step.title}
      </Typography>
      )}
      <Typography sx={{ margin: '10px 0 0 0', fontSize: 16 }}>{step.content}</Typography>
    </CardContent>
    <CardActions>
      {index > 0 && !skipBackArray.includes(index) && (
      <Button {...backProps} variant="contained" color="secondary">Back</Button>
      )}
      {continuous && !isLastStep && !skipNextArray.includes(index) && (
      <Button {...primaryProps} id="next" variant="contained">Next</Button>
      )}
      {!continuous && (
      <Button {...closeProps} variant="contained">Close</Button>
      )}
      {
        <Button {...skipProps} variant="contained" color="secondary">Exit</Button>
      }
    </CardActions>
  </Card>
);

export default Tooltip;
