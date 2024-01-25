import React from 'react'

const RandomCard = ({random}) => {
    return ( 
        <>
         <img src={random.drinks.strDrinkThumb}/>
         <h2>{random.drinks.strDrink}</h2>
        
        </>
     );
}

export default RandomCard