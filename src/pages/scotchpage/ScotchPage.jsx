import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";

const ScotchPage = () => {
    const {scotch, setScotch} = useContext(mainContext)

    return ( 
        <>
            <h1>Gin Page</h1>
            <section>
                {scotch.map((scotchs, index)=>{
                    return(
                        <div key={index}>
                            <img src={scotchs.strDrinkThumb}  />
                            <h2>{scotchs.strDrink}</h2>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}
 
export default ScotchPage;