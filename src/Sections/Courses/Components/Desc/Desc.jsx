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
            <div className="card-inner desc mg-top-40">
                <h3 className="info">Pour suivre une formation vous avez besoin d'...</h3>
                <table className="info-table">
                    <tbody>
                        <tr>
                            <td className="td-logo"><img src={age} alt="logo plus de 18 ans" /></td>
                            <td className="td-info">Avoir plus de 18 ans.</td>
                        </tr>
                        <tr>
                            <td className="td-logo"><img src={certificate} alt="logo de certificat" /></td>
                            <td className="td-info">Etre détenteur d'un CEB ou d'un CESI ou le niveau équivalent.</td>
                        </tr>
                        <tr>
                            <td className="td-logo"><img src={actiris} alt="logo d'Actiris" /></td>
                            <td className="td-info">Etre inscrit comme demandeur d'emploi et titulaire du document A15.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </InfoCard>
    } />
}
export default Desc;