import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'
import { Link } from '@mui/material';

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

    fontWeight: '400',
  },
});

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Box mr={4}>
          <Typography variant='h4'>
            オ
            </Typography>
            </Box>
          <Typography sx={{flexGrow: 1, display : {xs:'none', sm:'flex'}}} variant="h4" component="div">
            otaku
          </Typography>
          <Box sx={{display : {xs:'none', sm:'block'}}}>
          <Link color="inherit" underline="none" target="blank" href="https://github.com/pragneshbarik/otaku-source"><Button color="inherit">Code</Button></Link>
          <Link color="inherit" underline="none" target="blank" href="https://barik.super.site/projects/otaku"><Button color="inherit">Docs</Button></Link>
          <Link color="inherit" underline="none" target="blank" href="https://barik.super.site"><Button color="inherit">Creator</Button></Link>
          
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}