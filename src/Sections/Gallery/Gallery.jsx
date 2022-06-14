import Title from '../Components/Title/Title';
import { faImage } from '@fortawesome/free-solid-svg-icons';


import './Gallery.css';

const Gallery = () => {
    return (<div className="main-container">
        <Title title="Galery"  direction="left" icon={faImage}></Title>

    </div>);
}

export default Gallery;