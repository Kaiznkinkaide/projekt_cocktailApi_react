import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider';


const Random = () => {
    const {random,} = useContext(mainContext)


    return ( 
        <>
        {random ? (
            <div>
                <img src={random[0]?.strDrinkThumb}/>
                <h2>{random[0]?.strDrink}</h2>
            </div>
        ) : (
                <p>Loading...</p>
        )
    }
        </>
    );
}

export default Random