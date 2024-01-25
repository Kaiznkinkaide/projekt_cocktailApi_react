import React, { useContext } from 'react'
import { mainContext } from '../../context/MainProvider';
import RandomCard from '../../assets/component/cocktailCard/RandomCard';

const Random = () => {
    const {random, setRandom} = useContext(mainContext)

    return ( 
        <>
            <section>
                
                   
                        <div>
                            <RandomCard
                            random={random}/>
                        </div>
       
  
                 
            </section> 
            
        </>
     );
}

export default Random