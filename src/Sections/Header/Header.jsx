// REACT IMPORTS OR OTHER LIBRARY DEPENDENCIES

// COMPONENTS IMPORTS
import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';


// STYLING IMPORTS
import './Header.css'

const Header = () => {
    return (<header className="main-container" id='accueil' >
        <video width="400" className="bg-video" autoPlay muted loop>
            <source src="SansTitre.mp4" type="video/mp4"></source>
        </video>
        <NavBar />
        <Hero />
    </header>);
}

export default Header;