import { useState } from "react";

import img from '../../../assets/1.png';

const Card = () => {
    const [hover, setHover] = useState(false);

    return (<div class='item' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ backgroundImage: `url(${img})` }}>
        <div className="top" >
            <div className={`left-bar ${hover ? 'visible' : 'hidden'}`}></div>
        </div>
        <div className="bottom" style={{ backgroundColor: hover ? '#ca3f11' : '#222A35' }} >
        </div>
    </div>);
}

export default Card;