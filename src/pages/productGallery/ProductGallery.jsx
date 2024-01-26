import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { mainContext } from '../../context/MainProvider'

const ProductGallery = () => {
    
    const {setId, data, userChoice, setUserChoice} = useContext(mainContext)
    const {categories} = useParams()

    useEffect(() => {
        setUserChoice(categories);
    }, [data]);


    return (
    <>
    {data ? (
        <>
        {data.map((cocktail, index) => {
            return (
                <button key={index}>
                    <h2>{cocktail?.strDrink}</h2>
                    <img src={cocktail?.strDrinkThumb}/>
                </button>
            )
        })}
        </>
    ) : (
        <p>Loading...</p>
    )
}
    </>
    )
}

export default ProductGallery