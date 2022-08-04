import Grid from '@mui/material/Grid';
import { useContext, useState } from 'react';
import AnimeCard from '../AnimeCard';
import CardContext from '../CardStates/cardContext';
import CardState from '../CardStates/cardState';
import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"




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
        <Grid container justifyContent="center" sx={{mt:'5%'}}>
            <Grid item xs={11} sm={11} lg={10} >

                    <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 500: 2, 900: 4}}
                    >

                 <Masonry gutter="1rem">   
                    {toRender && data.data.map(item => <AnimeCard title={item.title} img={item.image_url} rating={item.score} genres={item.genres}/>)}
                    </Masonry>
                    </ResponsiveMasonry>
                </Grid>
        </Grid>
        </CardState>
    )
}