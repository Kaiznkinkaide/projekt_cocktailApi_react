
import { useContext } from "react";
import GinCard from "../../assets/component/cocktailCard/GinCard"
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
                            <GinCard
                            gins={gins}/>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}
 
export default GinPage;