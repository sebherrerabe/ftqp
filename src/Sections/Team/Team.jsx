

import { TitleLeft } from '../Components/Titles/Titles';

import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
    return (<div className="main-container" id='notre-equipe'>
        <div className="team-container">
            <TitleLeft title="Notre equipe" />
        </div>
    </div>);
}

export default Team;