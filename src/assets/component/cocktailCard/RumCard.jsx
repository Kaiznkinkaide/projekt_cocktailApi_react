import React from 'react'

const RumCard = ({rums}) => {
    return ( 
        <>
        <img src={rums.strDrinkThumb}  />
        <h2>{rums.strDrink}</h2>


        </>
     );
}

export default RumCard