import { useState } from 'react';



import './Card.css';

const Card = ({ img, direction, title, desc, list }) => {

    const [cardClass] = useState(direction === 'left' ? 'left' : 'right');

    // const  myloop = () =>{

    //     const mylists = [
    //       'mylist' :  "Inscription toute l’année",
    //         "Formations qualifiante /+ou - 9 mois / Lundi - Jeudi",
    //         "Stage en entreprise / 4 semaines / Lundi - Vendred",
    //         "Objectif: mise à l’emploi",
    //         "Contrat BF: 2€/heure, etc."
    //     ]

    //     render(

    //         mylists.map(mylist , index =>{
    //             <ul>
    //                 <li></li>
    //             </ul>
    //         }))

    // }










    return (
        <div className={"courses-card-container " + cardClass}>
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