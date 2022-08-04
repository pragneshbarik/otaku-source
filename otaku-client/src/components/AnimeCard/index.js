import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'
import StarIcon from '@mui/icons-material/Star';

import CardContext from '../CardStates/cardContext';
import { Rating } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    fontWeight: 600,
  },
});



export default function AnimeCard(props) {
  

  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ width: '100%', bgcolor:"#2E0249", color:"white"}}>
      <CardMedia
        component="img"
        height="400"
        image={props.img}
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{m:'5px'}}>
          {props.title}
        </Typography>
        <Rating name="half-rating-read" defaultValue={(props.rating)/2} precision={0.1} emptyIcon={<StarIcon style={{ opacity: 0.8 }} fontSize="inherit" />} readOnly />
        <Box sx={{color:"white", mt:'30px'}}>
          {props.genres.map((genre)=><Chip label={genre} sx={{mt:'6px', ml:'5px', bgcolor:'#570A57', color:"white"}}/>)}
      </Box>
      </CardContent>
      <CardActions>
        <Button sx={{ml:'auto'}}><Typography sx={{fontWeight:600}}>Trailer</Typography></Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
