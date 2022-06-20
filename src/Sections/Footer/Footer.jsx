

import FooterTop from './Components/FooterTop';
import FooterMiddle from './Components/FooterMiddle';
import FooterBottom from './Components/FooterBottom';

import './Footer.css';

const Footer = () => {
    return (<footer className="footer-background">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />  
    </footer>);
}

export default Footer;