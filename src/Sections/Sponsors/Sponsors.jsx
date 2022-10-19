import "./Sponsors.css";

import SponsorCard from "./Components/SponsorCard";
import actiris from "./assets/actiris.jpg";
import bxlformation from "./assets/bxlformation.png";
import constructiv from "./assets/constructiv.png";
import cpas from "./assets/cpas.png";
import fr from "./assets/fr.jpg";
import gj from "./assets/gj.png";
import maribel from "./assets/maribel.png";
import ue from "./assets/ue.png";
import { useState } from "react";

const Sponsors = () => {
  const [images] = useState([
    { id: 0, img: actiris, link: "https://www.actiris.brussels/" },
    { id: 1, img: bxlformation, link: "https://www.bruxellesformation.brussels/" },
    { id: 2, img: constructiv, link: "https://www.constructiv.be/fr-BE/" },
    { id: 3, img: cpas, link: "https://cpasbxl.brussels/" },
    { id: 4, img: fr, link: "https://www.federation-wallonie-bruxelles.be/la-fw-b-dans-le-monde/la-fw-b-et-la-francophonie/" },
    { id: 5, img: gj, link: "" },
    { id: 6, img: maribel, link: "http://emploi.belgique.be/fr/themes/emploi-et-marche-du-travail/mesures-demploi/baisse-generale-du-cout-salarial/maribel-social" },
    { id: 7, img: ue, link: "https://european-union.europa.eu/index_fr" },
  ]);

  return (
    <section className="section main-container sponsors">
      <div className="icon-container">
        {images.map((img) => (
          <SponsorCard key={img.id} img={img.img} link={img.link} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
