import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./app.scss";

export default function LearnCard(props) {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        height="400"
        image={props.image}
        alt= {props.type}
      />
      <CardContent className="centered" >
        <Typography gutterBottom variant="h5" component="div">
          {props.type}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          This is the Cloudinary Logo
        </Typography> */}
      </CardContent>
    </Card>
  );
}
