import { Box, Grid} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import { Link } from '@mui/material';


export default function Footer () {
    return (
        
        <Box sx={{
            position:"relative",
            backgroundColor:"black",
            mb:"-100px",
            pb:'5px', pt:'25px', 
            color:"white", 
            fontFamily:'IBM Plex Mono'}}>
                <Grid container
                justifyContent="center"
                spacing={4}
          >
                    <Grid item><Link color="inherit" underline="none" target="blank" href="https://github.com/pragneshbarik"><GitHubIcon /></Link></Grid>
                    <Grid item><Link color="inherit" underline="none" target="blank" href="https://www.linkedin.com/in/pragnesh-barik"><LinkedInIcon /></Link></Grid>
                    <Grid item><Link color="inherit" underline="none" target="blank" href="https://www.instagram.com/pragnesh_barik/"><InstagramIcon /></Link></Grid>
                    <Grid item><Link color="inherit" underline="none" target="blank" href="https://barik.super.site/"><PersonIcon /></Link></Grid>
                </Grid>
                <Box sx={{textAlign:'center', pt:"20px"}}> 2022 ©️ Pragnesh Barik </Box>
                
        </Box>
    )
}