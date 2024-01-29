
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {

const {userChoice} = useParams()


    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Link to="/drinks/gin"><button className="userChoice gin">Gin</button></Link>
            <Link to="/drinks/vodka"><button className="userChoice vodka">Vodka</button></Link>
            <Link to="/drinks/rum"><button className="userChoice rum">Rum</button></Link>
            <Link to="/drinks/scotch"><button className="userChoice scotch">Scotch</button></Link>  
            <Link to="/drinks/Non_Alcoholic"><button className="userChoice nonAlc">Non Alcoholic</button></Link>  
            <Link to="/drinks/random"><button className="userChoice random">Random</button></Link>  
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}
 
export default Home;