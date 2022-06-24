import { useState, useEffect } from 'react';



import Title from '../Components/Title/Title';
import Image from './Components/Image'

import OwlCarousel from 'react-owl-carousel';



import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Gallery.css';



import { faImage } from '@fortawesome/free-solid-svg-icons';
import chantier from './assets/chantier.jpeg'
import chantier1 from './assets/chantier1.jpeg'
import chantier2 from './assets/chantier2.jpeg'
import chantier4 from './assets/chantier4.jpeg'
import chantier6 from './assets/chantier6.jpeg'
import chantier9 from './assets/chantier9.jpeg'
import group from './assets/group.jpeg'
import group2 from './assets/group2.jpeg'
import group3 from './assets/group3.jpeg'
import maconnerie from './assets/maconnerie.jpeg'
import maconnerie2 from './assets/maconnerie2.jpeg'
import maconnerie3 from './assets/maconnerie3.jpeg'
import maconnerie4 from './assets/maconnerie4.jpeg'
import maconnerie5 from './assets/maconnerie5.jpeg'
import maconnerie6 from './assets/maconnerie6.jpeg'
import maconnerie7 from './assets/maconnerie7.jpeg'
import maconnerie11 from './assets/maconnerie11.jpeg'
import maconnerie13 from './assets/maconnerie13.jpeg'
import plafonnage from './assets/plafonnage.jpeg'
import plafonnage2 from './assets/plafonnage2.jpeg'
import plafonnage3 from './assets/plafonnage3.jpeg'
import plafonnage4 from './assets/plafonnage4.jpeg'
import plafonnage5 from './assets/plafonnage5.jpeg'
import plafonnage6 from './assets/plafonnage6.jpeg'
import plafonnage7 from './assets/plafonnage7.jpeg'
import plafonnage9 from './assets/plafonnage9.jpeg'
import plafonnage12 from './assets/plafonnage12.jpeg'





const Gallery = () => {

    const imgs = [chantier, chantier1, chantier2, chantier4, chantier6, chantier9, group, group2, group3, maconnerie, maconnerie2, maconnerie3, maconnerie4, maconnerie5, maconnerie6, maconnerie7, maconnerie11, maconnerie13, plafonnage, plafonnage2, plafonnage3, plafonnage4, plafonnage5, plafonnage6, plafonnage7, plafonnage9, plafonnage12];


    const [margin, setMargin] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const addMargin = () => {
        const owl = document.querySelector('.owl-carousel.owl-theme.gallery');
        let containerWidth = owl.offsetWidth;
        let finalMargin = (containerWidth - 1500) / 2;
        setMargin(finalMargin);
    }

    useEffect(() => {
        const resizeWindow = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', resizeWindow);
        if (windowWidth > 1024) {
            addMargin()
        } else {
            setMargin(2000);
        }
        return () => {
            window.removeEventListener('resize', resizeWindow);
        }
    }, [windowWidth]);


    const settings = {
        loop: true,
        margin: margin,
        autoWidth: true,
        center: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3,
            }
        }
    }



    return (
        <section className="section main-container" id='galerie'>
            <div className='gallery-top'>
                <Title title="Galerie" direction="left" icon={faImage}></Title>
            </div>
            <div className="gallery-container bg-white">
                <OwlCarousel className='owl-theme gallery' {...settings} >
                    {imgs.map((img, index) => {
                        return <Image key={index} src={img} />
                    })}
                </OwlCarousel>
            </div>

            <div className="gallery-bottom"></div>
        </section>
    );
}


export default Gallery;