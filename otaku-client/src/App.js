import Search from './components/Search';
import NavBar from './components/NavBar';
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'
import bg4 from './images/bg4.jpg'
import bg5 from './images/bg5.jpg'
import bg6 from './images/bg6.jpg'
import bg7 from './images/bg7.jpg'
import bg8 from './images/bg8.jpg'
import bg9 from './images/bg9.jpg'
import bg11 from './images/bg11.jpg'
import bg12 from './images/bg12.jpg'
import bg13 from './images/bg13.jpg'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import AnimeCard from './components/AnimeCard';
import AnimeCardGrid from './components/AnimeCardGrid';
import { Typography } from '@mui/material';
import Counter from './components/Counter';
import { useEffect, useState } from 'react';
import CardState from './components/CardStates/cardState';
import Footer from './components/Footer';


function App() {
  const [image, setImage] = useState("")
  const bgs = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg11, bg12, bg13]

  useEffect(()=>{
    let randomid = Math.floor(Math.random()*12);
    setImage(bgs[randomid])
  }, [])
  
  return (
    <>
    <CardState>
    <div style={{
      background:`linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 100%), url(${image})`,
      backgroundRepeat  : 'no-repeat',
      backgroundSize: 'cover',
      height:'100vh'}}>
   
    
    <NavBar />
    <Typography variant='h1' sx={{color:'white', mx:'auto', mt:{xs:'10rem',sm:'30px'}, textAlign:"center", fontFamily:"Poppins"}}>otaku</Typography>
    <Typography variant='h6' sx={{color:'white', textAlign:"center", fontFamily:"Poppins", mb:'1%', fontWeight:"200"}}>Your personal Anime Recommender.</Typography>
    <Counter />
    <Box sx={{mt:'50px'}}>
    <Search />
    <Box sx={{color:'white', textAlign:"center", mt:'20vh' }}>
    <KeyboardDoubleArrowDownIcon sx={{fontSize:"4rem", opacity:"0.3"}} />
    </Box>
    </Box>
    </div>
    <div style={{backgroundColor:'black'}}>
    <Typography variant='h4' sx={{color:'white', textAlign:"center", fontFamily:"Poppins", mt:'0%'}}>Recommendations</Typography>
    <AnimeCardGrid />
    </div>
    <Footer />
    </CardState>
    </>
  );
}

export default App;
