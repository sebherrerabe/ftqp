import age from "./assets/age.svg";
import certificate from "./assets/certificate.svg";
import actiris from "./assets/actiris.png";

export const data = {
  titre: "Le titre de l'article",
  sections: {
    "Notre Equipe": {
      titre: "notre equipe",
      description: "Le description de la section",
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
      description: "Le description de la section",
      "Pour suivre une formation vous avez besoin d'...": [
        {
          phrase: "Avoir plus de 18 ans.",
          icon: age,
          alt: "logo plus de 18 ans",
        },
        {
          phrase:
            "Etre détenteur d'un CEB ou d'un CESI ou le niveau équivalent.",
          icon: certificate,
          alt: "logo de certificat",
        },
        {
          phrase:
            "Etre inscrit comme demandeur d'emploi et titulaire du document A15.",
          icon: actiris,
          alt: "logo d'actiris",
        },
      ],
      Plafonnage: {
        titre: "Vous apprendrez a",
        description: "avoir les techniques manuelles pour...",
        clés: [
          {
            titre: "MORTIER",
            img: "mortier",
          },
          {
            titre: "CIMENTAGE",
            icon: "cimentage",
          },
          {
            titre: "ENDUIT",
            icon: "enduit",
          },
        ],
      },
      "Maçonerie": {
        titre: "Vous apprendrez a",
        description: "avoir les techniques manuelles pour...",
        clés: [
          {
            titre: "MORTIER",
            img: "mortier",
          },
          {
            titre: "CIMENTAGE",
            icon: "cimentage",
          },
          {
            titre: "ENDUIT",
            icon: "enduit",
          },
        ],
      },
    },
  },
};
