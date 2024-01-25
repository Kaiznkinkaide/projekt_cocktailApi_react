import { useContext } from "react";
import VodkaCard from "../../assets/component/cocktailCard/VodkaCard";
import { mainContext } from "../../context/MainProvider";


const VodkaPage = () => {


    const {vodka, setVodka} = useContext(mainContext)

    return ( 
        <>
            <h1>Gin Page</h1>
            <section>
                {vodka.map((vodkas, index)=>{
                    return(
                        <div key={index}>
                            <VodkaCard
                            vodkas={vodkas}/>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}
 
export default VodkaPage;