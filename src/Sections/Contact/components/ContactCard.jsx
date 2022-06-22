import { useEffect, useRef, useState } from "react";
import "./ContactCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import emailjs from 'emailjs-com'

const ContactCard = ({ children, img, content }) => {
  const newRef = useRef(null);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');    
  const [emailSent, setEmailSent] = useState();


  // const isValidEmail = email => {
  //   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   return regex.test(String(email).toLowerCase());
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(name);

    if (name && email && telephone && sujet && message ) {
      
      const serviceId = 'service_8nrzzsc';
      const templateId = 'template_f42wql2';
      const publicKey = '37wcuH2VenoYPUR8j';
      const templateParams = {
          name,
          email,
          telephone,
          sujet,
          message
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
          .then(response => console.log(response))
          .then(error => console.log(error));

          //make the inputs empty again after sending:
       setName('');
       setEmail('');
       setTelephone('');
       setSujet('');
       setMessage('');

       setEmailSent(true);

     } else {
        setEmailSent(false);   
       
      }
  }

   

  useEffect(() => {
    console.log(newRef.current.clientHeight);
  }, []);

  return (
    <div className="contactcard-container" >
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

          <form onSubmit={handleSubmit}>
            <div className="form-top-container">
              <input
                type="text"
                className="mg-top-40 form-class-1"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                className=" mg-top-40 form-class-1"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-middle-container mg-top-40">
              <input
                type="text"
                className="smoll-input"
                placeholder="Telephone"
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
              />
              <input type="text" 
              className="smoll-input" 
              placeholder="Sujet"
              value={sujet}
              onChange={e => setSujet(e.target.value)} 
              />

            </div>
            <div className="form-bottom-container">
              <textarea
                name="text"
                className="text-area mg-top-40 form-class-1"
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
              <button className="btn-contact-page mg-top-40"> <FontAwesomeIcon icon={faPaperPlane} ></FontAwesomeIcon> Envoyer</button>
            </div>

            <div className={emailSent ? 'visible-warning-message' : 'invisible-warning-message'}> Merci pour votre message. Nous vous contacterons bientôt.
            </div>

            <div className={emailSent === false ? 'visible-warning-message' : 'invisible-warning-message'}> Veuillez remplir tous les champs.
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
