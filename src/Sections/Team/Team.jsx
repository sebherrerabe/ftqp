

import { TitleLeft } from '../Components/Titles/Titles';

import './Team.css';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
    return (<div className="main-container" id='notre-equipe'>
        <div className="team-container">
            <TitleLeft title="Notre equipe" icon={faPeopleGroup} />
        </div>
    </div>);
}

export default Team;