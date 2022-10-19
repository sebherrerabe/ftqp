import CourseCard from "../CourseCard/CourseCard";
import InfoCard from "../InfoCard/InfoCard";
import Row from "../Row/Row";
import Task from "../Task/Task";
import { data } from "../../../../assets/data";
import plafonnage from "../../assets/plafonnage.jpg";

const Maconerie = () => {
  const { titre, clés, description } = data.sections["Nos Formations"].maçonerie;
  return (
    <Row
      newClass="maconerie"
      left={
        <InfoCard>
          <div className="card-inner">
            <h3 className="info maconerie">Vous apprendrez a</h3>
            <p>{description}</p>
            <div className="tasks-container mg-top-40">
              {clés.map((task, index) => (
                <Task key={index} {...task} />
              ))}
            </div>
          </div>
        </InfoCard>
      }
      right={<CourseCard title={titre} img={plafonnage} direction="left" />}
    />
  );
};

export default Maconerie;
