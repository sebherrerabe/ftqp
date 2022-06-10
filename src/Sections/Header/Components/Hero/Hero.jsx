


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="inner-container">
        <div className="top-div">
          <h1 className="h1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,{" "}
          </h1>
        </div>
        <div className="bottom-div">
          <div className="btn-container">
            <button className="bnt btn-hero">Contact us</button>
            <div className="icons-container">
              <ul className="icons">
                <li>
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
