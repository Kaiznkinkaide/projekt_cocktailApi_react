import React, { useContext } from 'react'
import { mainContext } from "../../context/MainProvider";

const RumPage = () => {
    const {rum, setRum} = useContext(mainContext)

    return ( 
        <>
            <h1>Rum</h1>
            <section>
                {rum.map((rums, index)=>{
                    return(
                        <div key={index}> 
                        <img src={rums.strDrinkThumb}  />
                        <h2>{rums.strDrink}</h2>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}

export default RumPage