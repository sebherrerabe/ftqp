import actiris from "./actiris.png";
import age from "./age.svg";
import bétonnage from "./bétonnage.jpg";
import certificate from "./certificate.svg";
import cimentage from "./cimentage.jpg";
import egouttage from "./egouttage.jpg";
import enduit from "./enduit.jpg";
import helmet from "./helmet-safety-solid.svg";
import isolation from "./isolation.jpg";
import maconnerie from "./maconnerie.png";
import paperclip from "./paperclip-solid.svg";

export const data = {
  titre: "Ici, on construit des vies",
  buttonContact: "Contactez-nous",
  sections: {
    "Notre Equipe": {
      titre: "notre equipe",
      description:
        "FTQP est un centre de formation  qualifiante et d'insertion socioprofessionnelle visant l'emploi. A titre informatif et indicatif nos formateurs estiment qu'il faut plus ou moins 1040 heures (9 mois) pour effectuer un parcours complet (apprendre tous les modules d'une section). Il est tout à fait possible de s'inscrire et d'effectuer un ou deux  modules, atteindre ses objectifs personnels et se désinscrire juste après à ce niveau le centre FTQP est assé flexible et souple.  ",
      membres: [
        {
          nom: "nom1",
          position: "position1",
          image: "image1",
          resauxSociaux: {
            facebook: "facebook1",
            twitter: "twitter1",
            linkedin: "linkedin1",
            email: "email1",
          },
        },
      ],
    },
    "Nos Formations": {
      titre: "nos formations",
      description:
        "Nos formations offrent ainsi les outils, les savoir-faire et les savoir-être pour une carrière dans les métiers cités. En fin de parcours de chaque formation, un stage en entreprise de 4 semaines est organisé avec comme objectif une mise à l'emploi direct",
      "Pour suivre une formation vous avez besoin d'...": [
        {
          phrase: "Avoir plus de 18 ans.",
          icon: age,
          alt: "logo plus de 18 ans",
        },
        {
          phrase: "Etre détenteur d'un CEB ou d'un CESI ou le niveau équivalent.",
          icon: certificate,
          alt: "logo de certificat",
        },
        {
          phrase: "Etre inscrit comme demandeur d'emploi et titulaire du document A15.",
          icon: actiris,
          alt: "logo d'actiris",
        },
        {
          phrase: "Vignette de Mutuelle",
          icon: paperclip,
          alt: "logo de clip",
        },
        {
          phrase: "Etre motivé par le monde de  la construction.",
          icon: helmet,
          alt: "logo de casque",
        },
      ],
      plafonnage: {
        titre: "Planfonnage",
        description:
          "réaliser des travaux d'isolation, d'étanchéité, des coffrages et ferraillages, du bétonnage, jointoiement et égouttage. Cettes techniques sont réparties dans les 7 différents modules qui sont classés par unité d'apprentissage.",
        clés: [
          {
            titre: "isolation",
            img: isolation,
          },
          {
            titre: "bétonnage",
            img: bétonnage,
          },
          {
            titre: "égouttage",
            img: egouttage,
          },
        ],
      },
      maçonerie: {
        titre: "Maçonerie",
        description:
          "des techniques manuelles et mécaniques, le plafonneur sera capable de réaliser, réparer et décorer et maîtriser les techniques de mortier, cimentage et d'enduit. Tout cela est réparti en 4 modules classés par unité d'apprentissage.",
        clés: [
          {
            titre: "MORTIER",
            img: maconnerie,
          },
          {
            titre: "CIMENTAGE",
            img: cimentage,
          },
          {
            titre: "ENDUIT",
            img: enduit,
          },
        ],
      },
    },
  },
};
