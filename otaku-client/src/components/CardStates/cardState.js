import React, { useState } from 'react'
import CardContext from './cardContext'

const CardState = (props) => {
    const [data, setData] = useState(0)

    const updateData = (e) => {
        setData(e)
    }

    return (
        <CardContext.Provider value={{data, updateData}}>
            {props.children}
        </CardContext.Provider>
    )

}

export default CardState