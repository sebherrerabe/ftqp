


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faTwitterSquare, faFacebookSquare, faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="inner-container">
        <div className="top-div">
          <h1>
            <span>Lorem ipsum dolor sit amet consectetur</span> <span>inventore nesciunt.</span>
          </h1>
        </div>
        <div className="bottom-div">
          <div className="btn-container">
            <button className="btn-hero mg-top-40">
              <FontAwesomeIcon icon={faPaperPlane} />Contactez-nous</button>
            <ul className="icons">
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagramSquare} /></a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitterSquare} /></a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faFacebookSquare} /></a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faGooglePlusSquare} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
