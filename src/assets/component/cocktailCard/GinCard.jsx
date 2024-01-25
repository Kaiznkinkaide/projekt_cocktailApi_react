const GinCard = ({gins}) => {


    return ( 
        <>
        <img src={gins.strDrinkThumb}  />
        <h2>{gins.strDrink}</h2>


        </>
     );
}
 
export default GinCard;