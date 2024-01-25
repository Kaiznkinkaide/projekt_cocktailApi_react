import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider';
import NonAlcCrad from '../../assets/component/cocktailCard/NonAlcCrad';

const NonAlc = () => {
    const {nonAlc, setNonAlc} = useContext(mainContext)

    return ( 
        <>
            <section>
                {nonAlc.map((nonAlcs, index)=>{
                    return(
                        <div key={index}>
                            <NonAlcCrad
                            nonAlcs={nonAlcs}/>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}

export default NonAlc