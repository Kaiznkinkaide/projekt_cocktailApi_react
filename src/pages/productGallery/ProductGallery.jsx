import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  { mainContext } from '../../context/MainProviderContext'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'



const ProductGallery = () => {
    
    const {setId, data, userChoice, setUserChoice} = useContext(mainContext)
    const {categories} = useParams()

    useEffect(() => {
        setUserChoice(categories);
    }, [data]);


    return (
    <>
    <header>
            <Header/>
        </header>
    <section className='cards'>
        {data ? (
            <>
            {data.map((cocktail, index) => {
                return (
                    <button className='productcard' key={index}>
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
    </section>
    <footer>
        <Footer/>
    </footer>
    </>
    )
}

export default ProductGallery