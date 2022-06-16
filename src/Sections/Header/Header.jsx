// REACT IMPORTS OR OTHER LIBRARY DEPENDENCIES

// COMPONENTS IMPORTS
import NavBar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import bgvideo from './assets/bgvideo.mp4';


// STYLING IMPORTS
import './Header.css'

const Header = () => {




    return (<header className="section main-container" id='accueil' >
        <div className="gradient"></div>
        <video className="bg-video" autoPlay loop muted>
            <source src={bgvideo} type="video/mp4"></source>
        </video>
        <NavBar />
        <Hero />
    </header>);
}

export default Header;