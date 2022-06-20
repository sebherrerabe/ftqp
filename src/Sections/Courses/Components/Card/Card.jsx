import { useState } from 'react';



import './Card.css';

const Card = ({ img, direction, title, desc, list }) => {

    const [cardClass] = useState(direction === 'left' ? 'left' : 'right');


    return (
        <div className={"courses-card-container mg-top-30 " + cardClass}>
            <div className={"card-course " + cardClass}>
                <div className={"card-photo " + cardClass} style={{ backgroundImage: `url(${img})` }}>
                    <div className={"card-box " + cardClass}>
                        <div className="inner-card-box">
                            <h3 className='card-title'>{title}</h3>
                            <p className="card-desc">{desc}</p>
                            {list}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Card;