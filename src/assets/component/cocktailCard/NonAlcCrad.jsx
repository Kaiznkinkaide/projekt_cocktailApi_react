import React from 'react'

const NonAlcCrad = ({nonAlcs}) => {
    return ( 
        <>
        <img src={nonAlcs.strDrinkThumb}  />
        <h2>{nonAlcs.strDrink}</h2>
        </>
     );
}

export default NonAlcCrad