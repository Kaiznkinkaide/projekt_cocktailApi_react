
import { Link, useParams } from "react-router-dom";

const Home = () => {

const {userChoice} = useParams()


    return ( 
        <>
        <h1>Home</h1>
        <Link to="/drinks/gin"><button>Gin</button></Link>
        <Link to="/drinks/vodka"><button>Vodka</button></Link>
        <Link to="/drinks/rum"><button>Rum</button></Link>
        <Link to="/drinks/scotch"><button>Scotch</button></Link>  
        <Link to="/drinks/Non_Alcoholic"><button>Non Alcoholic</button></Link>  
        <Link to="/drinks/random"><button>Random</button></Link>  
        
        </>
     );
}
 
export default Home;