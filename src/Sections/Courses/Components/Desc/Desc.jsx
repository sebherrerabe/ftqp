import "./Desc.css";

import InfoCard from "../InfoCard/InfoCard";
import Row from "../Row/Row";
import { data } from "../../../../assets/data";

const Desc = () => {
  const { description } = data.sections["Nos Formations"];
  const formations = data.sections["Nos Formations"]["Pour suivre une formation vous avez besoin d'..."];
  return (
    <Row
      left={<p>{description}</p>}
      right={
        <InfoCard direction="left">
          <div className="card-inner desc mg-top-40">
            <h3 className="info">Pour suivre une formation vous avez besoin d'...</h3>
            <table className="info-table">
              <tbody>
                {formations.map((item, index) => (
                  <tr className={index} key={index}>
                    <td className="td-logo">
                      <img src={item.icon} alt={item.alt} />
                    </td>
                    <td className="td-info">{item.phrase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>
      }
    />
  );
};
export default Desc;
