// REACT IMPORTS OR OTHER LIBRARY DEPENDENCIES

// COMPONENTS IMPORTS
import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


// STYLING IMPORTS

const Header = () => {



    return (<header className="main-container" id='accueil'style={{ position: "relative" }}>
        <NavBar />
        <Hero />
    </header>);
}

export default Header;