
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import img from '../../../assets/1.png';

const Card = ({ name, position, socialmedia }) => {


    const capitalise = (str) => {
        if (str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        } else {
            return '';
        }
    }

    return (<div className='item' style={{ backgroundImage: `url(${img})` }}>
        <div className="top" >
            <div className="left-bar">
                <a href={socialmedia !== undefined ? socialmedia.instagram : ""}>
                    <FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href={socialmedia !== undefined ? socialmedia.facebook : ""}>
                    <FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href={socialmedia !== undefined ? socialmedia.linkedin : ""}>
                    <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={socialmedia !== undefined ? socialmedia.email : ""}>
                    <FontAwesomeIcon icon={faSquareEnvelope} /></a>
            </div>
        </div>
        <div className="bottom">
            <h4>{capitalise(name)}</h4>
            <p>{capitalise(position)}</p>
        </div>
    </div>);
}

export default Card;