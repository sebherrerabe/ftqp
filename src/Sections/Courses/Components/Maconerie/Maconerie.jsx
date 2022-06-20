import Row from "../Row/Row";
import InfoCard from "../InfoCard/InfoCard";
import CourseCard from "../CourseCard/CourseCard";


import plafonnage from "../../assets/plafonnage.jpg";   

const Maconerie = () => {
    return <Row left={
        < InfoCard >

        </InfoCard >
    } right={
        <CourseCard title="Maconerie" img={plafonnage} direction="left" />
    } />

}

export default Maconerie;