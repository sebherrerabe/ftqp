import CourseCard from "../CourseCard/CourseCard";
import InfoCard from "../InfoCard/InfoCard";
import Row from "../Row/Row";
import Task from "../Task/Task";
import { data } from "../../../../assets/data";
import plafonnage9 from "../../assets/plafonnage9.jpeg";

const Plafonnage = () => {
  const { titre, clés, description } = data.sections["Nos Formations"].plafonnage;
  return (
    <Row
      left={<CourseCard title={titre} img={plafonnage9} direction="right" />}
      right={
        <InfoCard direction="left">
          <div className="card-inner">
            <h3 className="info">Vous apprendrez a</h3>
            <p>{description}</p>
            <div className="tasks-container mg-top-40">
              {clés.map((task, index) => (
                <Task key={index} {...task} />
              ))}
            </div>
          </div>
        </InfoCard>
      }
    />
  );
};

export default Plafonnage;
