const VodkaCard = ({vodkas}) => {


    return ( 
        <>
        <img src={vodkas.strDrinkThumb}  />
        <h2>{vodkas.strDrink}</h2>


        </>
     );
}
 
export default VodkaCard;