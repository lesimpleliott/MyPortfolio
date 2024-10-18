import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import myProjects from "../assets/datas/myProjects.json";
import ProjectCard from "../components/projectCard/ProjectCard";
import useStoreResponsive from "../stores/responsive.store";

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const { responsiveMode } = useStoreResponsive(); // On récupère l'état responsive depuis le store

  // Initialisation avec 2 lignes pour desktop
  const [numLines, setNumLines] = useState(2);
  const lineHeight = 350; // Hauteur d'une ligne en px
  const gap = 32; // Marge entre les lignes (1rem = 16px)

  // Définir dynamiquement le nombre de lignes en fonction de l'état responsiveMode
  useEffect(() => {
    if (responsiveMode === "mobile") {
      setNumLines(3); // Afficher 3 lignes sur mobile
    } else {
      setNumLines(2); // Afficher 2 lignes sur desktop
    }
  }, [responsiveMode]); // Recalculer chaque fois que responsiveMode change

  const minHeight = numLines * (lineHeight + gap); // Calcul de la hauteur minimum
  const [maxHeight, setMaxHeight] = useState(minHeight);

  useEffect(() => {
    if (sectionRef.current) {
      setMaxHeight(showAll ? sectionRef.current.scrollHeight + gap : minHeight);
    }
  }, [showAll, minHeight]);

  return (
    <ProjectsStyled showAll={showAll} maxHeight={maxHeight}>
      <section className="collapsedSection">
        <div className="cardContainer" ref={sectionRef}>
          {myProjects
            .slice()
            .reverse()
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>
      <button onClick={() => setShowAll(!showAll)}>
        <i
          className={`icon fa-solid fa-chevron-down ${showAll ? "open" : ""}`}
        ></i>
        <span className="text">{showAll ? "Voir moins" : "Voir plus"}</span>
      </button>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.div<{ showAll: boolean; maxHeight: number }>`
  margin: 50px 0 100px;

  .collapsedSection {
    position: relative;
    width: 100vw;
    height: ${({ maxHeight }) => `${maxHeight}px`};
    overflow: hidden;
    transition: height 500ms ease-in-out;

    .cardContainer {
      max-width: 1024px;
      margin: 0 auto;
      padding: 0 5vw;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  button {
    width: 100%;
    color: var(--buttonText);
    font-size: 1.3rem;
    text-align: center;
    transition: color 250ms ease-in-out;

    &:hover {
      color: var(--mainColor);
    }

    .text {
      font-family: "Bebas Neue", sans-serif;
      padding-left: 0.75rem;
    }

    .icon {
      transition: transform 250ms ease-in-out;
      &.open {
        transform: rotate(180deg);
      }
    }
  }
`;

export default Projects;
