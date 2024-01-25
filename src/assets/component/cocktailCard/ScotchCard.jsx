import React from 'react'

const ScotchCard = ({scotchs}) => {
    return ( 
        <>
        <img src={scotchs.strDrinkThumb}  />
        <h2>{scotchs.strDrink}</h2>


        </>
     );
}

export default ScotchCard