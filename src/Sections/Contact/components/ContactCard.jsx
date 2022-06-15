

import './ContactCard.css';




const ContactCard = ({ children, img, content, }) => {



    return (
        <div className="contactcard-container">
            <div className="side"></div>
            <div className="middle-container">
                
            <div className="contactcard"></div>
                <div className="picture">
                    <div className="contactcard-right">

                    </div>
                </div>
            </div>
            <div className="side"></div>
        </div>
    )
}



export default ContactCard;