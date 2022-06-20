


import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';



const FooterTop = (icon,) => {


    return(
        <div className="info-container">
            <div> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>  Rue des Alliés 303, 1190 Forest</div>
            <div><FontAwesomeIcon icon={ faEarthAfrica}></FontAwesomeIcon> info@example.com</div>
            <div><FontAwesomeIcon icon={faPhone } ></FontAwesomeIcon> 02165421621</div>
        </div>
    )
}



export default FooterTop;