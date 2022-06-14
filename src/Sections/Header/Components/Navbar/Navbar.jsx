import { useEffect, useState, useRef } from 'react';


import Link from './Components/Link/Link';


import './Navbar.css'
import logo from './assets/logo ftqp.png'

import { faHouseChimney, faPeopleGroup, faPersonDigging, faImages, faAddressCard } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {


    const [links, setLinks] = useState([{ text: "accueil", icon: faHouseChimney, active: true, id: "#accueil" },
    { text: "notre equipe", icon: faPeopleGroup, active: false, id: "#notre-equipe" },
    { text: "nos formations", icon: faPersonDigging, active: false, id: "#nos-formations" },
    { text: "galerie", icon: faImages, active: false, id: "#galerie" },
    { text: "contact", icon: faAddressCard, active: false, id: "#contact" }]);



    const [navClass, setNavClass] = useState(false)
    const navRef = useRef(null)
    navRef.current = navClass
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavClass(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleClick = (e, index, id) => {
        setLinks(links.map((link, i) => {
            if (i === index) {
                return { ...link, active: true }
            } else {
                return { ...link, active: false }
            }
        }
        ))

    }

    return (
        <nav className={`navbar ${navClass ? 'shrink' : null}`} ref={navRef} >
            <div className="inner-navbar">
                <div className="inner-navbar-left">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="inner-navbar-right">
                    <ul>
                        {links.map((link, index) => {
                            return <Link key={index} index={index} text={link.text} icon={link.icon} active={link.active} id={link.id} handleClick={handleClick} />
                        })}


                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;