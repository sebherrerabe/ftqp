import Title from "../Components/Title/Title";
import ContactCard from "./components/ContactCard";

import './Contact.css';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (<div className="main-container">
                <Title title="Contact" icon={faAddressCard}></Title>
                <ContactCard />
            
               

    </div>);
}

export default Contact;