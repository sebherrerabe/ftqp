import Row from "../Row/Row";
import InfoCard from "../InfoCard/InfoCard";
import CourseCard from "../CourseCard/CourseCard";
import Task from "../Task/Task";


import plafonnage from "../../assets/plafonnage.jpg";

const Maconerie = () => {

    const tasks = [{ title: "Mortier", img: "" }, { title: "Cimentage", img: "" }, { title: "Enduit", img: "" }]

    return <Row left={
        < InfoCard >
            <div className="card-inner">
                <h3 className="info maconerie">Vous apprendrez a</h3>
                <p>avoir les techniques manuelles pour...</p>
                <div className="tasks-container mg-top-40">
                    {tasks.map((task,index) => <Task key={index} {...task} />)}
                </div>
            </div>
        </InfoCard >
    } right={
        <CourseCard title="Maconerie" img={plafonnage} direction="left" />
    } />

}

export default Maconerie;