import "./Hero.css";

import { faFacebookSquare, faGooglePlusSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../../../assets/data";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const { titre, buttonContact } = data;
  return (
    <div className="hero-container">
      <div className="inner-container">
        <div className="top-div">
          <h1>
            <span>{titre}</span>
          </h1>
        </div>
        <div className="bottom-div">
          <div className="btn-container">
            <a href="#contact" className="btn-hero mg-top-40">
              <FontAwesomeIcon icon={faPaperPlane} />
              {buttonContact}
            </a>
            <ul className="icons">
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faGooglePlusSquare} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
