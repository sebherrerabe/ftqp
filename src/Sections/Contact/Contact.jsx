import './Contact.css';

import ContactCard from "./components/ContactCard";
import Title from "../Components/Title/Title";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    console.log(process.env.REACT_APP_CONTACT_KEY);
    return (<section className="section main-container" id="contact">
        <div className="contact-top">
            <Title direction="right" title="Contact" icon={faAddressCard} />
        </div>
        <ContactCard />
        <div className="contact-bottom"></div>
    </section>);
}

export default Contact;