import "./Team.css";

import TeamSlider from "./Components/TeamSlider/TeamSlider";
import Title from "../Components/Title/Title";
import { data } from "../../assets/data";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  const { titre, description } = data.sections["Notre Equipe"];
  return (
    <section className="section main-container" id="notre-equipe">
      <div className="team-container bg-white">
        <Title direction="left" title={titre} icon={faPeopleGroup} />
        <div className="section-desc mg-top-100">
          <p className="desc team">{description}</p>
          <TeamSlider />
        </div>
      </div>
    </section>
  );
};

export default Team;
