import { useContext } from "react";
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
                            <img src={vodkas.strDrinkThumb}  />
                            <h2>{vodkas.strDrink}</h2>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}
 
export default VodkaPage;