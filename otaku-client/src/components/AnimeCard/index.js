import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './index.css'
import StarIcon from '@mui/icons-material/Star';

import { Divider, Fab, Grid, Rating } from '@mui/material';

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}




export default function AnimeCard(props) {
  

  return (
    <Card variant="outlined" sx={{ width: '100%', bgcolor:"#1E1B26", color:"white", fontFamily:"Poppins"}}>
      <CardMedia
        component="img"
        height="400"
        image={props.img}
        alt="anime_image"
      />
      <CardContent >
        <Grid container
        justifyContent="space-between">
          <Grid item xs={9}>
        <Typography gutterBottom variant="h6" component="div" sx={{m:'5px', fontWeight:"200", fontFamily:"Poppins"}}>
          {props.title}
        </Typography>
        
        </Grid>
        <Grid item xs={2}>
        <Fab color="primary" sx={{bgcolor:"#2E2B36"}} size="medium"><PlayArrowIcon sx={{fontSize:"1.5rem", color:"white", opacity:0.5}} /></Fab>
        </Grid>
        </Grid>
        {/* <Divider sx={{bgcolor:"#3E3B46", mt:'15px', mb:'10px'}}/> */}
        <Stack direction="row" 
          justifyContent="space-between"
        sx={{mx:"3px", mt:"15px"}}>
        <Typography sx={{fontFamily:"IBM Plex Mono", ml:'3px', opacity:'0.5', fontSize:"0.9rem", fontWeight:"200", mb:'5px'}}>RATINGS</Typography>
        <Stack direction="column"
        alignItems="flex-end"
        >
        <Rating size="small" name="half-rating-read" defaultValue={(props.rating)/2} precision={0.1} emptyIcon={<StarIcon style={{ color:'#2E2E1E', opacity: 1}}  fontSize="inherit" />} readOnly />
        <Box sx={{fontSize:'0.8rem', mt:'4px', ml:'2px', fontWeight:'200', opacity:"0.5"}}>{nFormatter(parseInt(props.members), 1)}</Box>
        </Stack>
        </Stack>
        <Divider sx={{bgcolor:"#3E3B46", mt:'10px'}}/>

        <Stack direction="column" 
          justifyContent="space-between"
        sx={{mx:"3px", mt:"7px"}}>
          
        <Typography sx={{fontFamily:"IBM Plex Mono", ml:'3px', opacity:'0.5', fontSize:"0.9rem", fontWeight:"200", mb:'10px'}}>SYNOPSIS</Typography>
        
        <Box sx={{fontWeight:'200', ml:'4px', fontSize:".85rem", opacity:'0.8'}}>{props.synopsis.split('.')[0] + '.'}</Box>
        <Stack direction="column"
        alignItems="flex-end"
        >
        </Stack>
        </Stack>
        
        <Divider sx={{bgcolor:"#3E3B46", mt:'10px'}}/>

        <Box sx={{color:"white", mt:'10px'}}>
          {props.genres.map((genre)=><Chip size="medium" label={genre} sx={{fontSize:'0.85rem', mt:'5px', opacity:'0.9', fontFamily:"IBM Plex Mono", fontWeight:'300', ml:'4px', bgcolor:'#2E2B36', color:"#a2a2a2"}}/>)}
      </Box>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
