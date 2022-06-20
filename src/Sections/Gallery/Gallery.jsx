import Title from '../Components/Title/Title';
import { faImage } from '@fortawesome/free-solid-svg-icons';


import './Gallery.css';

const Gallery = () => {
    return (<section className="section main-container" id='galerie'>
        <div className="gallery-container bg-white">
            <Title title="Galerie" direction="left" icon={faImage}></Title>
        </div>

    </section>);
}

export default Gallery;