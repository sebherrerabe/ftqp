import "./ContactCard.css";

import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactCard = () => {
  const newRef = useRef(null);
  const [emailSent, setEmailSent] = useState(false);

  return (
    <div className="contactcard-container">
      <div className="side">
        <div className="shape"></div>
        <div className="rectangle"></div>
        <div className="shape"></div>
      </div>
      <div className="middle-container" ref={newRef}>
        <div className="contactcard">
          <div className="contact-card-top">
            <div className="title-bar">
              <h5 className="question">Questions?</h5>
            </div>
          </div>

          <form onSubmit={() => setEmailSent(true)} action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value={process.env.REACT_APP_CONTACT_KEY} />
            <div className="form-top-container">
              <input name="name" type="text" className="mg-top-40 form-class-1" placeholder="Name" />
              <input name="email" type="email" className=" mg-top-40 form-class-1" placeholder="Email" />
            </div>
            <div className="form-middle-container mg-top-40">
              <input name="telephone" type="text" className="smoll-input" placeholder="Telephone" />
              <input name="sujet" type="text" className="smoll-input" placeholder="Sujet" />
            </div>
            <div className="form-bottom-container">
              <textarea name="message" className="text-area mg-top-40 form-class-1" placeholder="Message"></textarea>
              <button className="btn-contact-page mg-top-40">
                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> Envoyer
              </button>
            </div>

            <div className={emailSent ? "visible-warning-message" : "invisible-warning-message"}>
              {" "}
              Merci pour votre message. Nous vous contacterons bientôt.
            </div>

            <div className={emailSent === false ? "visible-warning-message" : "invisible-warning-message"}>
              {" "}
              Veuillez remplir tous les champs.
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
      <div className="side">
        <div className="shape"></div>
        <div className="rectangle"></div>
        <div className="shape"></div>
      </div>
    </div>
  );
};

export default ContactCard;
