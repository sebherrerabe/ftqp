import Title from '../Components/Title/Title';
import { faImage } from '@fortawesome/free-solid-svg-icons';


import './Gallery.css';

const Gallery = () => {
    return (<section className="section main-container" id='galerie'>
        <Title title="Galerie"  direction="left" icon={faImage}></Title>

    </section>);
}

export default Gallery;