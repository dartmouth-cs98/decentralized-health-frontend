import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';

export default function DashBoardCard(props) {
  return (
    <Link style={{ textDecoration: 'none' }} to={props.to}>
      <Card sx={{ maxWidth: 450, minWidth: 300 }}>
        <CardActionArea>
          <CardContent sx={{
            display: 'flex', justifyContent: 'space-around', ml: 4, mr: 4, mt: 6, mb: 6,
          }}
          >
            <Typography align="left" sx={{ fontSize: 30 }} color="text.primary">
              {props.title}
            </Typography>
            <ArrowForward sx={{ ml: 2, alignSelf: 'center' }} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
