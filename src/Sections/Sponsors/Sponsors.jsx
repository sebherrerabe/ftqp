
import { useState } from 'react';
import SponsorCard from './Components/SponsorCard';


const Sponsors = () => {
    const [images] = useState([{ id: 0, img: "" }, { id: 1, img: "" }, { id: 2, img: "" }, { id: 3, img: "" }, { id: 4, img: "" }, { id: 5, img: "" }, { id: 6, img: "" }, { id: 7, img: "" }])

    console.log(images)
    return (<section className="section main-container">
        <div className="sponsors-container">

        {images.map(img => <SponsorCard key={img.id} />)}
        </div>
    </section>);
}

export default Sponsors;