
import { useState } from 'react';
import SponsorCard from './Components/SponsorCard';
import './Sponsors.css';

import actiris from './assets/actiris.jpg'
import bxlformation from './assets/bxlformation.png'
import constructiv from './assets/constructiv.png'
import cpas from './assets/cpas.png'
import fr from './assets/fr.jpg'
import gj from './assets/gj.png'
import maribel from './assets/maribel.png'
import ue from './assets/ue.png'


const Sponsors = () => {
    const [images] = useState([{ id: 0, img: actiris, link: "https://www.actiris.brussels/" }, { id: 1, img: bxlformation, link: "https://www.bruxellesformation.brussels/" }, { id: 2, img: constructiv, link: "https://www.constructiv.be/fr-BE/" }, { id: 3, img: cpas, link: "www.google.be" }, { id: 4, img: fr, link: "www.google.be" }, { id: 5, img: gj, link: "www.google.be" }, { id: 6, img: maribel, link: "www.google.be" }, { id: 7, img: ue, link: "www.google.be" }])

    console.log(images)
    return (<section className="section main-container sponsors">
        <div className='icon-container'>
            {images.map(img => <SponsorCard key={img.id} img={img.img} link={img.link} />)}
        </div>
    </section>);
}

export default Sponsors;