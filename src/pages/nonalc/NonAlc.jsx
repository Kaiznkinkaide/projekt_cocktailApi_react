import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider';

const NonAlc = () => {
    const {nonAlc, setNonAlc} = useContext(mainContext)

    return ( 
        <>
            <section>
                {nonAlc.map((nonAlcs, index)=>{
                    return(
                        <div key={index}>
                            <img src={nonAlcs.strDrinkThumb}  />
                            <h2>{nonAlcs.strDrink}</h2>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}

export default NonAlc