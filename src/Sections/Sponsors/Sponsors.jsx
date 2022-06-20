
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
    const [images] = useState([{ id: 0, img: actiris }, { id: 1, img: bxlformation }, { id: 2, img: constructiv }, { id: 3, img: cpas }, { id: 4, img: fr }, { id: 5, img: gj }, { id: 6, img: maribel }, { id: 7, img: ue }])

    console.log(images)
    return (<section className="section main-container sponsors">
        <div className='icon-container'>
            {images.map(img => <SponsorCard key={img.id} img={img.img} />)}
        </div>
    </section>);
}

export default Sponsors;