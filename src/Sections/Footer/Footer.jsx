

import FooterTop from './Components/FooterTop/FooterTop';
import FooterMiddle from './Components/FooterMiddle/FooterMiddle';
import FooterBottom from './Components/FooterBottom/FooterBottom';

import './Footer.css';

const Footer = () => {
    return (<footer className="footer-background">
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />  
    </footer>);
}

export default Footer;