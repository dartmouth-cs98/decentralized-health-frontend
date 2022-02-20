import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
  <Card {...tooltipProps}>
    <CardContent>
      <Typography>{index + 1} / {size}</Typography>
      {step.title && (
      <Typography
        color="primary"
        variant="h3"
        sx={{ margin: '10px 0 0 0', textAlign: 'center', fontWeight: 'bold' }}
      >{step.title}
      </Typography>
      )}
      <Typography sx={{ margin: '10px 0 0 0', fontSize: 14 }}>{step.content}</Typography>
    </CardContent>
    <CardActions>
      {index > 0 && (
      <Button {...backProps}>Back</Button>
      )}
      {continuous && !isLastStep && (
      <Button {...primaryProps}>Next</Button>
      )}
      {!continuous && (
      <Button {...closeProps}>Close</Button>
      )}
      {
        <Button {...skipProps}>Exit</Button>
      }
    </CardActions>
  </Card>
);

export default Tooltip;
