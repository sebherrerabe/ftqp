

import './ContactCard.css';




const ContactCard = ({ children, img, content,  }) =>{



    return(
        <div className="div-container">
        <div className="container-left-right"></div>
        <div className="container-middle">
            <div className="content-container-middle"></div>
            <div className="picture"></div>
        </div>
        <div className="container-left-right"></div>
    </div>
    )
}



export default ContactCard;