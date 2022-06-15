import { useEffect, useRef } from "react";
import "./ContactCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactCard = ({ children, img, content }) => {
  const newRef = useRef(null);

  useEffect(() => {
    console.log(newRef.current.clientHeight);
  }, []);

  return (
    <div className="contactcard-container">
      <div className="side"></div>
      <div className="middle-container" ref={newRef}>
        <div className="contactcard">
          <div className="contact-card-top">
            <div className="title-bar">
              <h5 className="question">Question?</h5>
            </div>
          </div>
          <form>
            <div className="form-top-container">
              <input
                type="text"
                className="mg-top-40 form-class-1"
                placeholder="Name"
              />
              <input
                type="text"
                className=" mg-top-40 form-class-1"
                placeholder="Email"
              />
            </div>
            <div className="form-middle-container mg-top-40">
              <input
                type="text"
                className="smoll-input"
                placeholder="Telephone"
              />
              <input type="text" className="smoll-input" placeholder="Sujet" />
            </div>
            <div className="form-bottom-container">
              <textarea
                name="text"
                className="text-area mg-top-40 form-class-1"
                placeholder="Message"
              ></textarea>
              <button className="btn-contact-page mg-top-40"> <FontAwesomeIcon icon={faPaperPlane} ></FontAwesomeIcon> Envoyer</button>
            </div>
          </form>
        </div>
        <div className="picture">
          <div className="contactcard-right">
            <div className="contact-card-top">
              <div className="title-bar-right"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="side"></div>
    </div>
  );
};

export default ContactCard;
