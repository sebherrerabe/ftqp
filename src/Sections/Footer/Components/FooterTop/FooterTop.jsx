


import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FooterTop.css';



const FooterTop = (icon,) => {


    return (
        <div className="info-container">
            <div className="icons-container">
                <div className="icon-footer-container">
                    <div className='info footer'>  Rue des Alliés 303, 1190 Forest </div>
                    <div className='circle'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> </div>

                </div>
                <div className="icon-footer-container">
                    <div className='info footer'> info@example.com</div>
                    <div className="circle"><FontAwesomeIcon icon={faEarthAfrica}></FontAwesomeIcon></div>

                </div>
                <div className="icon-footer-container">
                    <div className='info footer'>  02165421621</div>
                    <div className="circle"><FontAwesomeIcon icon={faPhone} ></FontAwesomeIcon></div>

                </div>

            </div>
        </div>
    )
}



export default FooterTop;