import Title from "../Components/Title/Title";
import ContactCard from "./components/ContactCard";

import './Contact.css';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (<section className="main-container" id="contact">
                <Title title="Contact" icon={faAddressCard}></Title>
                <ContactCard />
            
               

    </section>);
}

export default Contact;