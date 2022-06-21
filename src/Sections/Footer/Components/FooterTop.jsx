


import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';



const FooterTop = (icon,) => {


    return(
        <div className="info-container">
            <div className='info'> <div className='circle'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> </div>  <span className='hovered'>Rue des Alliés 303, 1190 Forest</span> </div>
            <div className='info'> <div className="circle"><FontAwesomeIcon icon={ faEarthAfrica}></FontAwesomeIcon></div> info@example.com</div>
            <div className='info'> <div className="circle"><FontAwesomeIcon icon={faPhone } ></FontAwesomeIcon></div> 02165421621</div>
        </div>
    )
}



export default FooterTop;