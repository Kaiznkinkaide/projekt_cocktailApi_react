import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import ScotchCard from "../../assets/component/cocktailCard/ScotchCard";

const ScotchPage = () => {
    const {scotch, setScotch} = useContext(mainContext)

    return ( 
        <>
            <h1>Gin Page</h1>
            <section>
                {scotch.map((scotchs, index)=>{
                    return(
                        <div key={index}>
                            <ScotchCard
                            scotchs={scotchs}/>
                        </div>
                    )
                })}
                 
            </section> 
            
        </>
     );
}
 
export default ScotchPage;