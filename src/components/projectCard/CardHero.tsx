import styled from "styled-components";
import { ProjectType } from "../../types/project.type";

const CardHero = ({ project }: { project: ProjectType }) => {
  return (
    <CardHeroStyled>
      <img
        className="hero"
        src={project.images.hero}
        alt={`image du projet ${project.title}`}
      />
      {project.schoolProject && (
        <img
          className="schoolProject"
          src="./icons/openclassrooms.svg"
          alt="school project icon"
        />
      )}
    </CardHeroStyled>
  );
};

const CardHeroStyled = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;

  .schoolProject {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 1rem;
    right: 1rem;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  }

  .hero {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CardHero;
