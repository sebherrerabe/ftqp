import Title from "../Components/Title/Title";


import "./Courses.css";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import plafonnage from './assets/plafonnage.jpg';
import bg from './assets/bg.jpg';

const Row = ({ left, right }) => {
    return <div className="courses-row mg-top-40">
        <div className="row-left">
            {left}
        </div>
        <div className="row-right">
            {right}
        </div>
    </div>
}

const InfoCard = ({ children, direction }) => {
    return <div className={`info-card ${direction === 'left' ? "mg-left-20" : "mg-right-20"}`}>
        {children}
    </div>
}

const CourseCard = ({ title, img, direction }) => {
    return <div className={`course-card ${direction === 'left' ? "mg-left-20" : "mg-right-20"}`}>
        <div className="course-card-top">
            <h3 className={direction === 'left' ? "h3-left" : "h3-right"}>{title}</h3>
        </div>
        <div className="course-card-bottom">
            <img src={img} alt="" />
        </div>
    </div>
}

const Desc = () => {
    return <Row left={
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quas impedit quos tempora nulla, veniam ab repellendus a! Illo
            inventore aperiam assumenda beatae fugiat tenetur quisquam nemo nihil sunt minus.</p>
    } right={
        <InfoCard direction="left"></InfoCard>
    } />
}

const Plafonnage = () => {
    return <Row left={
        <CourseCard title="Plafonnage" img={plafonnage} direction="right" />
    } right={
        < InfoCard direction="left">

        </InfoCard >
    } />
}

const Maconerie = () => {
    return <Row left={
        < InfoCard >

        </InfoCard >
    } right={
        <CourseCard title="Maconerie" img={plafonnage} direction="left" />
    } />

}

const Courses = () => {


    return (
        <section className="section main-container" id="nos-formations">
            <div className="bg-photo" style={{ backgroundImage: `url(${bg})` }}>
                <div className="courses-container">
                    <Title title="Nos Formations" icon={faPersonDigging} direction="right" />
                    <div className="section-desc mg-top-40">
                        <Desc />
                        <Plafonnage />
                        <Maconerie />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
