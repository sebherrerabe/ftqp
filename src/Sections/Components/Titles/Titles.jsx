
import './Titles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TitleLeft = ({ icon, title }) => {
    return (<div className="title title-left">
        <h2><FontAwesomeIcon icon={icon} />{title}</h2>
    </div>);
}
export const TitleRight = ({ icon, title }) => {
    return (<div className="title title-right">
        <h2><FontAwesomeIcon icon={icon} />{title}</h2>
    </div>);
}