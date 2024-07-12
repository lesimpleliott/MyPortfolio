import styled from "styled-components";
import myProjects from "../../assets/datas/myProjects.json";
import { useStoreModal } from "../../stores/modal.store";
import useStoreProject from "../../stores/project.store";
import { ProjectType } from "../../types/project.type";
import CardHero from "./CardHero";
import CardHover from "./CardHover";
import CardInfos from "./CardInfos";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { setTabIndex } = useStoreProject();
  const { setModalIsOpen, setModalContent } = useStoreModal();

  // Fonction pour gérer le clic sur le bouton "infos" dans une ProjectCard
  const openModal = (id: number, content: "project" | "credits") => {
    const projectIndex = myProjects.findIndex((project) => project.id === id);
    setModalIsOpen(true);
    setModalContent(content);
    setTabIndex(projectIndex);
  };

  return (
    <ProjectCardStyled onClick={() => openModal(project.id, "project")}>
      <CardHero project={project} />
      <CardInfos project={project} />
      <CardHover project={project} />
    </ProjectCardStyled>
  );
};

// STYLED-COMPONENTS
const ProjectCardStyled = styled.article`
  flex: 1 0 320px;
  height: 350px;
  border-radius: 15px;
  background-color: var(--cardBackground);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
  transition: background-color 250ms ease-in-out, box-shadow 250ms ease-in;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    &:hover {
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);

      .hoverBox {
        backdrop-filter: blur(10px);
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5) inset;
        .stickyBtn {
          opacity: 1;
          transition: opacity 250ms ease-in-out;
        }
      }
    }
  }
`;

export default ProjectCard;
