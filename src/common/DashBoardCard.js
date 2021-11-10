import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function DashBoardCard(props) {
  return (
    <Link style={{ textDecoration: 'none' }} to={props.to}>
      <Card sx={{ maxWidth: 450 }}>
        <CardActionArea>
          <CardContent sx={{ display: 'flex', flex: 'space-between', margin: 8 }}>
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
