import Grid from '@mui/material/Grid';
import { useContext, useState } from 'react';
import AnimeCard from '../AnimeCard';
import CardContext from '../CardStates/cardContext';
import CardState from '../CardStates/cardState';
import { useEffect } from 'react';



export default function AnimeCardGrid() {
    const{data, updateData} = useContext(CardContext)
    const [toRender, setToRender] = useState(0)

    useEffect(()=>{
        if (data) {
        setToRender(1)
    }
    }, [data])

    

    console.log("from grid", data.data)




    
    return(
        <CardState>
        <Grid container justifyContent="center" sx={{mt:'10%'}}>
            <Grid item xs={12} sm={12} lg={8} >
                <Grid  container columns={{xs:12, sm:12, md:12}}
                    spacing={10}
                    justifyContent="center"
                    alignItems="center"
                >
                    
                    {toRender && data.data.map(item => <Grid item xs={11} md={4}><AnimeCard title={item.title} img={item.image_url} rating={item.score} genres={item.genres}/></Grid>)}
                    
                </Grid>
            </Grid>
        </Grid>
        </CardState>
    )
}