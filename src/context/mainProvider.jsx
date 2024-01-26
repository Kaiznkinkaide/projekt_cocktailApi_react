import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
    const [id, setId] = useState()
    const [data, setData] = useState()
    const [cocktail, setCocktail] = useState()
    const [userChoice, setUserChoice] = useState()
    const [searchInput, setSearchInput] = useState("")


    useEffect(() => {
        const api = 
            userChoice === "Non_Alcoholic" ? "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" :
            userChoice === "random" ? "https://www.thecocktaildb.com/api/json/v1/1/random.php" :
            userChoice === "search" ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}` :
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userChoice}`;
    

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

export default MainProvider;
