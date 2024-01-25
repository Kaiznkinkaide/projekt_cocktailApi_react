import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext()

const MainProvider = ({children}) => {

    const [gin, setGin] = useState([])
    const [vodka, setVodka] = useState([])
    const [rum, setRum] = useState([])
    const [nonAlc, setNonAlc] =useState([])
    const [random, setRandom] =useState([])
    const [scotch, setScotch] =useState([])


    useEffect(()=>{
        const apiFetch = async () =>{
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`)
            setGin(resp.data.drinks)
            console.log(resp.data.drinks);
        }
apiFetch()
    },[])


    useEffect(()=>{
        const apiFetch = async () =>{
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`)
            setVodka(resp.data.drinks)
            console.log(resp.data.drinks);
        }
apiFetch()
    },[])

    useEffect(()=>{
        const apiFetch = async () =>{
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum`)
            setRum(resp.data.drinks)
            console.log(resp.data.drinks);
        }
apiFetch()
    },[])

    useEffect(()=>{
        const apiFetch = async () =>{
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch`)
            setScotch(resp.data.drinks)
            console.log(resp.data.drinks);
        }
apiFetch()
    },[])

    useEffect(()=>{
        const apiFetch = async () =>{
            const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            setNonAlc(resp.drinks)
            console.log(resp.drinks);
        }
apiFetch()
    },[])

    useEffect(()=>{
        const apiFetch = async () =>{
            const resp = await axios.get(`www.thecocktaildb.com/api/json/v1/1/random.php`)
            setRandom(resp)
           
        }
apiFetch()
    },[])



    return ( 
        <>
        <mainContext.Provider value={{gin, setGin, vodka, setVodka, rum, setRum, scotch, setScotch, nonAlc, setNonAlc, random, setRandom}}>
            {children}
        </mainContext.Provider>
       
        </>
     );
}
 
export default MainProvider;


