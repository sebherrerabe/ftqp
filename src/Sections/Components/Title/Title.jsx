import { useState } from 'react';

import './Title.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Title = ({ direction, title, icon }) => {
    const [titleClass] = useState(direction === 'left' ? 'left' : 'right');
    const [innerTitleClass] = useState(direction === 'left' ? 'left' : 'right');

    return (<div className={"title " + titleClass}>
        <div className={"inner-title " + innerTitleClass}>
            <h2><FontAwesomeIcon icon={icon} /> {title}</h2>
        </div>
    </div>);
}

export default Title;
