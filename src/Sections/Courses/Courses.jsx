

import { TitleRight } from '../Components/Titles/Titles';

import './Courses.css';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
    return (<div className="main-container" id='nos-formations'>
        <div className="courses-container">
            <TitleRight title="Nos Formations" icon={faPeopleGroup} />
        </div>
    </div>);
}

export default Courses;