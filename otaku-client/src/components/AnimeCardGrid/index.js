import Grid from '@mui/material/Grid';
import { useContext, useState } from 'react';
import AnimeCard from '../AnimeCard';
import CardContext from '../CardStates/cardContext';
import CardState from '../CardStates/cardState';
import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"




export default function AnimeCardGrid() {
    const data = useContext(CardContext).data
    const [toRender, setToRender] = useState(0)

    useEffect(()=>{
        if (data) {
        setToRender(1)
    }
    }, [data])

    

    console.log("from grid", data.data)




    
    return(
        <CardState>
        <Grid container justifyContent="center" sx={{mt:'5%'}}>
            <Grid item xs={11} sm={11} lg={10} >

                    <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 500: 2, 900: 4}}
                    >

                 <Masonry gutter="1rem">   
                    {toRender && data.data.map(item => <AnimeCard key={item.uid} title={item.title} img={item.img_url} rating={item.score} members={item.members} genres={item.genre} synopsis={item.synopsis}/>)}
                    </Masonry>
                    </ResponsiveMasonry>
                </Grid>
        </Grid>
        </CardState>
    )
}