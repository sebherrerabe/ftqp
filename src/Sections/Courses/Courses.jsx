import Title from "../Components/Title/Title";
import Desc from "./Components/Desc/Desc";
import Plafonnage from "./Components/Plafonnage/Plafonnage";
import Maconerie from "./Components/Maconerie/Maconerie";



import "./Courses.css";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";








const Courses = () => {


    return (
        <section className="section main-container" id="nos-formations">
            <div className="courses-container">
                <Title title="Nos Formations" icon={faPersonDigging} direction="right" />
                <div className="section-formationn mg-top-40">
                    <Desc />
                    <Plafonnage />
                    <Maconerie />
                </div>
            </div>
        </section>
    );
};

export default Courses;
