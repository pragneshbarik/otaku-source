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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'
import StarIcon from '@mui/icons-material/Star';

import CardContext from '../CardStates/cardContext';
import { Fab, Grid, Rating } from '@mui/material';

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
    <Card variant="outlined" sx={{ width: '100%', bgcolor:"#121212", color:"white"}}>
      <CardMedia
        component="img"
        height="400"
        image={props.img}
        alt="green iguana"
      />
      <CardContent >
        <Grid container
        justifyContent="space-between">
          <Grid item xs={9}>
        <Typography gutterBottom variant="h6" component="div" sx={{m:'5px', fontWeight:"200"}}>
          {props.title}
        </Typography>
        </Grid>
        <Grid item xs={2}>
        <Fab color="primary" sx={{bgcolor:"#1E1E1E"}} size="medium"><PlayArrowIcon sx={{fontSize:"1.5rem", color:"white", opacity:0.5}} /></Fab>
        </Grid>
        </Grid>
        <Rating size="small" name="half-rating-read" defaultValue={(props.rating)/2} precision={0.1} emptyIcon={<StarIcon style={{ color:'#2E2E1E', opacity: 1}}  fontSize="inherit" />} readOnly />
        <Box sx={{color:"white", mt:'30px'}}>
          {props.genres.map((genre)=><Chip label={genre} sx={{mt:'6px', fontWeight:'200', ml:'5px', bgcolor:'#1E1E1E', color:"white"}}/>)}
      </Box>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}
