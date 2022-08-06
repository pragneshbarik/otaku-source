import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext } from 'react';
import axios from 'axios'
import { styled } from "@mui/material/styles";
import { Grid } from '@mui/material';
import CardContext from '../CardStates/cardContext';


const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: "translate(34px, 20px) scale(1);"
  },
  "& .MuiAutocomplete-inputRoot": {
    fontSize: "1.3rem",
    color: "white",
    fontFamily:"IBM Plex Mono",
    backgroundColor: "rgba(30,27,38, 0.5)",
    opacity:"1",
    borderRadius:"10px",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "white"
    // },
    // "&:hover .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#395B64"
    // },
    // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "purple"
    // }
  }
});



export default function Search() {
  const [src, setSrc] = useState("")
  const [titles, setTitles] = useState([])
  const updateData = useContext(CardContext).updateData
  
  useEffect(()=>{
    const fetch_url = 'https://otaku-backend.herokuapp.com/search/' + src
    // const fetch_url = 'http://localhost:5000/search/' + src
    axios.get(fetch_url).then((res)=>(setTitles(res.data))).catch((e)=>(console.log(e)))
  }, [src])

  function initateSearch (event, value) {
    const uid=value.split(':')[0]

    // const fetch_url = "http://localhost:5000/rec/" + uid + "/20"
    const fetch_url = "https://otaku-backend.herokuapp.com/rec/" + uid + "/52"
    axios.get(fetch_url).then((res)=>{updateData(res)})
  }

  function handleChange(event, value) {
    setSrc(value)
  }

    return (
      <Grid>
        <Grid container justifyContent="center">
        <Grid item xs={11} sm={10} md={8} lg={6}>
      <StyledAutocomplete
        id="search-box"
        freeSolo
        options={titles.map((option) => option.uid + ": " + option.title)}
        renderInput={(params) => <TextField {...params} placeholder="Search Titles" sx={{fontFamily:"Poppins"}}/>}
        onChange={initateSearch}
        onInputChange={handleChange}
      />
      </Grid>
      </Grid>
      </Grid>      
    )
  }
