import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Link = ({ text, icon, active, id, setNavbarTranslate }) => {

    const capitaliseAll = (str) => {
        return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    }
    return (<li className={active ? 'active' : ''}>
        <a href={id} onClick={() => setNavbarTranslate("-100%")}><FontAwesomeIcon icon={icon} />{capitaliseAll(text)}</a>
        <div className="bar"></div>
    </li>);
}

export default Link;