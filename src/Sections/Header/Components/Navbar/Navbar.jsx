import { useEffect, useState, useRef } from 'react';


import Link from './Components/Link/Link';


import './Navbar.css'
import logo from './assets/logo ftqp.png'

import { faHouseChimney, faPeopleGroup, faPersonDigging, faImages, faAddressCard } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {


    const [sections, setSections] = useState([{ text: "accueil", icon: faHouseChimney, active: true, id: "#accueil" },
    { text: "notre equipe", icon: faPeopleGroup, active: false, id: "#notre-equipe" },
    { text: "nos formations", icon: faPersonDigging, active: false, id: "#nos-formations" },
    { text: "galerie", icon: faImages, active: false, id: "#galerie" },
    { text: "contact", icon: faAddressCard, active: false, id: "#contact" }]);


    const [navClass, setNavClass] = useState(false)
    const navRef = useRef(null)
    navRef.current = navClass

    const switchActiveByScroll = () => {
        const scroll = window.scrollY
        const sections = document.querySelectorAll('.section')
        sections.forEach((section, index) => {
            if (scroll > section.offsetTop - 100) {
                setSections(prevSections => {
                    const newSections = prevSections.map((section, i) => {
                        if (i === index) {
                            return { ...section, active: true }
                        } else {
                            return { ...section, active: false }
                        }
                    })
                    return newSections
                })
            }
        }
        )
    }

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavClass(show)
            }
            switchActiveByScroll()
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])



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
                        {sections.map((section, index) => {
                            return <Link key={index} index={index} text={section.text} icon={section.icon} active={section.active} id={section.id} />
                        })}


                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;