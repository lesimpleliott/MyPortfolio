import styled from "styled-components";
import CtaButton from "../components/CtaButton";
import HeroBanner from "../layouts/HeroBanner";

const About = () => {
  return (
    <AboutStyled>
      <HeroBanner
        profilPicture="./eliott-hide.webp"
        profilPictureAlt="Photo d'Eliott Lesimple - Développeur web FrontEnd"
      >
        <h2>À propos de moi</h2>
        <div className="textContainer">
          <p>
            À 35 ans, après avoir été un véritable couteau suisse dans les
            industries graphiques, où j'ai occupé divers postes tels que chef de
            projet, fabricant, graphiste exé, j'ai décidé de me lancer dans une
            nouvelle aventure et commence ainsi une reconversion dans le monde
            du développement web.
          </p>
          <p>
            En dehors du travail, je suis un amateur de sport, et plus
            particulièrement de parachutisme. Depuis 2009, je pratique cette
            discipline avec passion, allant même jusqu'à être un{" "}
            <strong>sportif de haut niveau</strong> dans différentes disciplines
            entre 2014 et 2021.
          </p>
          <p>
            Mon objectif professionnel est simple : apprendre chaque jour,
            progresser continuellement et devenir un{" "}
            <strong>développeur front-end polyvalent</strong>, doté de
            compétences solides.
          </p>
        </div>
        <CtaButton title="Curriculum vitæ" filePath="./CV_LesimpleEliott.pdf" />
      </HeroBanner>
    </AboutStyled>
  );
};

const AboutStyled = styled.main`
  padding-bottom: 50px;

  .heroBanner {
    .childrenWrapper {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      p {
        font-size: clamp(0.9rem, 2vw, 1rem);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 75px;

    .heroBanner {
      .childrenWrapper {
        align-items: center;
      }
    }
    .textContainer {
      @media screen and (max-width: 768px) {
        text-align: justify;
      }
    }
  }
`;

export default About;
