import "./Courses.css";

import Desc from "./Components/Desc/Desc";
import Maconerie from "./Components/Maconerie/Maconerie";
import Plafonnage from "./Components/Plafonnage/Plafonnage";
import Title from "../Components/Title/Title";
import { data } from "../../assets/data";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  const { titre } = data.sections["Nos Formations"];
  return (
    <section className="section main-container" id="nos-formations">
      <div className="courses-container">
        <Title title={titre} icon={faPersonDigging} direction="right" />
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
