import React, { useContext } from 'react'
import { mainContext } from "../../context/MainProvider";
import RumCard from '../../assets/component/cocktailCard/RumCard';

const RumPage = () => {
    const {rum, setRum} = useContext(mainContext)

    return ( 
        <>
            <h1>Rum</h1>
            <section>
                {rum.map((rums, index)=>{
                    return(
                        <div key={index}>
                            <RumCard
                            rums={rums}/>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}

export default RumPage