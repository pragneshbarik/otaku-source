import CountUp from 'react-countup'
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material'
import {Box} from '@mui/material';

export default function Counter() {
    return (
        <div style={{color:'white', fontSize:'2rem', padding:'20px', margin:"1rem", fontFamily:"Poppins", fontWeight:"200"}}>
        <Stack 
            justifyContent="center"
            direction='row' 
            divider={<Divider sx={{borderColor:'white'}} orientation='vertical' flexItem />}
            spacing={2} >
            <div><CountUp end={16000} suffix="+" duration={3} /><Box sx={{fontSize:'1rem', textAlign:'center'}}>Titles</Box></div>
            <div><CountUp end={100} suffix="+" duration={3} /><Box sx={{fontSize:'1rem', textAlign:'center'}}>Picks</Box></div>
            <div><CountUp end={1000} suffix="+" duration={3} /><Box sx={{fontSize:'1rem', textAlign:'center'}}>API Calls</Box></div>

            </Stack>
            </div>
    )
}