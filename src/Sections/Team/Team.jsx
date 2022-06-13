

import Title from '../Components/Title/Title';

import './Team.css';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Team = () => {
    return (<div className="main-container" id='notre-equipe'>
        <div className="team-container">
            <Title direction="left" title="Notre Equipe" icon={faPeopleGroup} />
        </div>
    </div>);
}

export default Team;