import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext();


const MainProviderContext = ({ children }) => {
    const [id, setId] = useState()
    const [data, setData] = useState()
    const [cocktail, setCocktail] = useState()
    const [userChoice, setUserChoice] = useState()
    const [searchInput, setSearchInput] = useState("")


    useEffect(() => {
        let api;
    
        switch (userChoice) {
            case "Non_Alcoholic":
                api = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
                break;
            case "random":
                api = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
                break;
            case "search":
                api = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
                break;
            default:
                api = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userChoice}`;
                break;
        }

    const apiFetch = async () => {
        const resp = await axios.get(api)
            setData(resp.data.drinks)
    }
    { userChoice ? apiFetch() : null}
}, [userChoice, searchInput,])


    return (
    <mainContext.Provider value={{userChoice,id, setId, data, cocktail, setCocktail, userChoice, setUserChoice, searchInput, setSearchInput}}>
        {children}
    </mainContext.Provider>
  );
};

export default MainProviderContext;
