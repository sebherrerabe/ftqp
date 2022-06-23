import { useEffect, useState } from 'react';

import OwlCarousel from 'react-owl-carousel';

import Card from "./Components/Card";


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './TeamSlider.css';


const TeamSlider = () => {

    const [margin, setMargin] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const addMargin = () => {
        const owl = document.querySelector('.owl-carousel');
        let containerWidth = owl.offsetWidth;
        let finalMargin = (containerWidth - 850) / 2;
        setMargin(finalMargin);
    }

    useEffect(() => {
        const resizeWindow = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', resizeWindow);
        if (windowWidth > 769) {
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
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,

                nav: false,

            },
            1000: {
                items: 4,
            }
        }
    }

    return (<OwlCarousel className='owl-theme team' {...settings} >
        <Card name="Name" position="position" />
        <Card name="Name" position="position" />
        <Card name="Name" position="position" />
        <Card name="Name" position="position" />
        <Card name="Name" position="position" />
        <Card name="Name" position="position" />
    </OwlCarousel >);
}

export default TeamSlider;