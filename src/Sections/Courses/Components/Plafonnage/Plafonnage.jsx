import Row from "../Row/Row";
import InfoCard from "../InfoCard/InfoCard";
import CourseCard from "../CourseCard/CourseCard";


import plafonnage from "../../assets/plafonnage.jpg";   


const Plafonnage = () => {
    return <Row left={
        <CourseCard title="Plafonnage" img={plafonnage} direction="right" />
    } right={
        < InfoCard direction="left">

        </InfoCard >
    } />
}

export default Plafonnage;