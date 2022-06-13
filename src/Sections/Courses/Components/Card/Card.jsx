import { useState } from 'react';


import './Card.css';

const Card = ({ children, img, direction, title, desc }) => {

    const [cardClass] = useState(direction === 'left' ? 'left' : 'right');


    return (
        <div className={"courses-card-container " + cardClass}>
            <div className={"card-course " + cardClass}>
                <div className={"card-photo " + cardClass} style={{ backgroundImage: `url(${img})` }}>
                    <div className={"card-box " + cardClass}>
                        <div className="inner-card-box">
                            <h4 className='card-title'>{title}</h4>
                            <div className="card-desc">{desc}</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Card;