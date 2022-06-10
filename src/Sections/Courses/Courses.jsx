

import Title from '../Components/Title/Title';

import './Courses.css';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
    return (<div className="main-container" id='nos-formations'>
        <div className="courses-container">
            <Title title="Nos Formations" icon={faPersonDigging} who="right" />
        </div>
    </div>);
}

export default Courses;