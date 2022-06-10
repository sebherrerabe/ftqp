import Title from "../Components/Title/Title";

import "./Courses.css";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  return (
    <div className="main-container" id="nos-formations">
      <div className="courses-container">
        <Title title="Nos Formations" icon={faPersonDigging} who="right" />
      </div>
      <div className="text">
        <p className="formationD">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          fuga accusamus sed saepe. Sint tempora incidunt, ducimus inventore
          officiis vitae temporibus. Libero distinctio unde facere aperiam? Sunt
          nihil deleniti vel.
        </p>
      </div>
      <div className="condition-container">
        <h3 className="condition">Nos condition :</h3>
        <p className="formationD">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
         
        </p>
      </div>
      <div className="pic-container">
        <div className="pic"></div>
        <div className="cards">
          <div className="card-content">
            <h3 className="margin-bottom">Plafonnage</h3>
            <p>
              
              Avec des techniques manuelles et mécaniques,le plafonneur sera
              capable de réaliser, réparer et décorer et maîtrisera les
              techniques de mortier, cimentage et d'enduit.
            </p>
            <ul>
              <li>Inscription toute l’année</li>
              <li>Inscription toute l’année</li>
              <li>Inscription toute l’année</li>
              <li>Inscription toute l’année</li>
              <li>Inscription toute l’année</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pic-container1">
        <div className="cards1">
          <div className="card-content">
            <h3 className="margin-bottom">Maçonnerie</h3>
            <p>
              
              Outre la maçonnerie, le stagiaire pourra réaliser des travaux
              di'solation et d'étanchéité, des coffrages et ferraillages, du
              bétonnage, jointoiement et égouttage.
            </p>
            <ul>
              <li>Inscription toute l’année</li>
              <li>Formations qualifiante /+ou - 9 mois / Lundi - Jeudi</li>
              <li>Stage en entreprise / 4 semaines / Lundi - Vendredi</li>
              <li>[Objectif: mise à l’emploi]</li>
              <li>Contrat BF: 2€/heure, etc.</li>
            </ul>
          </div>
        </div>
        <div className="pic1"></div>
      </div>
    </div>
  );
};

export default Courses;
