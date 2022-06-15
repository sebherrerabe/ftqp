import Title from "../Components/Title/Title";
import Card from "./Components/Card/Card";


import "./Courses.css";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import plafonnage from './assets/plafonnage.jpg';

const Courses = () => {
    const text = [
        {
            id: 1,
            text: "Inscription toute l année",
        },
        {
            id: 2,
            text: "Formations qualifiante /+ou - 9 mois / Lundi - Jeudi",
        },
        {
            id: 3,
            text: "Stage en entreprise / 4 semaines / Lundi - Vendred",
        },
        {
            id: 4,
            text: "Objectif: mise à l emploi",
        },
        {
            id: 5,
            text: "Contrat BF: 2€/heure, etc.",
        }
    ]
    return (
        <section className="section main-container" id="nos-formations">
            <div className="courses-container">
                <Title title="Nos Formations" icon={faPersonDigging} direction="right"  />
                <div className="section-desc mg-top-40">
                    <p className="desc mg-top-30">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
                        fuga accusamus sed saepe. Sint tempora incidunt, ducimus inventore
                        officiis vitae temporibus. Libero distinctio unde facere aperiam? Sunt
                        nihil deleniti vel.
                    </p>
                    <h3 className="mg-top-40">Nos conditions :</h3>
                    <ul className="mg-top-30">
                        <li> Avoir plus de 18 ans. </li>
                        <li> Etre détenteur d'un CEB ou d'un CESI ou le niveau équivalent. </li>
                        <li> Etre inscrit comme demandeur d'emploi et titulaire du document A15. </li>
                    </ul>
                </div>
                <Card direction='left' img={plafonnage} title="Plafonnage" desc=" Avec des techniques 
                manuelles et mécaniques,le plafonneur sera capable de réaliser, réparer et décorer et maîtrisera les techniques de mortier, cimentage et d'enduit."

                list={ <ul>
                    {text.map(el => <li key={el.id}>{el.text}</li>)}
                </ul>} >

                </Card>
                <Card direction='right' img={plafonnage} title="Maçonnerie" desc="  Outre la maçonnerie, le stagiaire pourra réaliser des travaux di'solation
                        et d'étanchéité, des coffrages et ferraillages, du bétonnage,
                        jointoiement et égouttage."
                    list={<ul>

                        {text.map(el => <li key={el.id}>{el.text}</li>)}

                    </ul>} >
                </Card>
            </div>


            {/* 
            
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
            </div> */}
        </section>
    );
};

export default Courses;
