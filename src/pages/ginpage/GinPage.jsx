
import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";


const GinPage = () => {

    const {gin, setGin} = useContext(mainContext)

    return ( 
        <>
            <h1>Gin Page</h1>
            <section>
                {gin.map((gins, index)=>{
                    return(
                        <div key={index}>
                            <img src={gins.strDrinkThumb}  />
                            <h2>{gins.strDrink}</h2>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}
 
export default GinPage;