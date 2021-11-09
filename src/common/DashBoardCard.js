import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { CardActionArea, Icon } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ArrowForward } from '@mui/icons-material';

export default function DashBoardCard(props) {
  return (
    <Link style={{ textDecoration: 'none' }} to={props.to}>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardContent sx={{ display: 'flex', flex: 'space-between' }}>
            <Typography align="left" sx={{ fontSize: 30 }} color="text.primary" gutterBottom>
              {props.title}
            </Typography>
            <Icon size="large" sx={{ ml: 9, alignSelf: 'center' }}><ArrowForward /></Icon>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
