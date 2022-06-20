import Row from "../Row/Row";
import InfoCard from "../InfoCard/InfoCard";


import './Desc.css';
import age from './assets/age.svg'
import certificate from "./assets/certificate.svg";
import actiris from "./assets/actiris.png"

const Desc = () => {
    return <Row left={
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quas impedit quos tempora nulla, veniam ab repellendus a! Illo
            inventore aperiam assumenda beatae fugiat tenetur quisquam nemo nihil sunt minus.</p>
    } right={
        <InfoCard direction="left">
            <div className="card-inner desc">
                <h3>Pour suivre une formation vous avez besoin de...</h3>
                <ul>
                    <li><div className="inner-li"><img src={age} alt="logo plus de 18 ans" /> Avoir plus de 18 ans.</div></li>
                    <li><div className="inner-li"><img src={certificate} alt="logo de certificat" /> Etre détenteur d'un CEB ou d'un CESI ou le niveau équivalent.</div>
                    </li>
                    <li><div className="inner-li"><img src={actiris} alt="logo d'Actiris" />Etre inscrit comme demandeur d'emploi et titulaire du document A15.</div> </li>
                </ul>
            </div>
        </InfoCard>
    } />
}
export default Desc;