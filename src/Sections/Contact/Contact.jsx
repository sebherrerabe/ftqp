import Title from "../Components/Title/Title";
import ContactCard from "./components/ContactCard";

import './Contact.css';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (<section className="section main-container" id="contact">
        <div className="contact-top">
            <Title direction="right" title="Contact" icon={faAddressCard} />
        </div>
        <ContactCard />
        <div className="contact-bottom"></div>
    </section>);
}

export default Contact;