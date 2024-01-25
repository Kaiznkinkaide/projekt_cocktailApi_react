
import { Link } from "react-router-dom";

const Home = () => {




    return ( 
        <>
        <h1>Home</h1>
        <Link to="/gin"><button>Gin</button></Link>
        <Link to="/vodka"><button>Vodka</button></Link>
        <Link to="/rum"><button>Rum</button></Link>
        <Link to="/scotch"><button>Scotch</button></Link>  
        <Link to="/nonAlc"><button>Non Alcoholic</button></Link>  
        <Link to="/random"><button>Random</button></Link>  
        
        </>
     );
}
 
export default Home;