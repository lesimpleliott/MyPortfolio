import styled from "styled-components";
import myProjects from "../assets/datas/myProjects.json";
import myStack from "../assets/datas/myStack.json";
import useStoreModal from "../stores/modal.store";
import useStoreProject from "../stores/project.store";
import { ProjectType } from "../types/project.type";
import StickyButton from "./StickyButton";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { setTabIndex } = useStoreProject();
  const { setModalIsOpen } = useStoreModal();

  // Fonction pour gérer le clic sur le bouton "infos" dans une ProjectCard
  const openModal = (id: number) => {
    const projectIndex = myProjects.findIndex((project) => project.id === id);
    setModalIsOpen(true);
    setTabIndex(projectIndex);
  };

  return (
    <ProjectCardStyled onClick={() => openModal(project.id)}>
      <img
        className="projectHero"
        src={project.images.hero}
        alt={`image du projet ${project.title}`}
      />
      <div className="projectInfos">
        <h4 className="title">{project.title}</h4>
        <div className="tags">
          {project.tags?.map((tag, index) => {
            const stack = myStack.find((item) => item.name === tag);
            return (
              <img
                className="icon"
                key={index}
                src={stack?.icon}
                alt={`icon de ${stack?.name}`}
              />
            );
          })}
        </div>
      </div>
      <div className="hoverBox">
        <StickyButton
          function={() => openModal(project.id)}
          alt="details icon"
          icon="./icons/infos_white.svg"
          sticky={false}
        />

        {project.links.github && (
          <StickyButton
            link={project.links.github}
            alt="github icon"
            icon="./icons/github_white.svg"
            sticky={false}
          />
        )}

        {project.links.preview && (
          <StickyButton
            link={project.links.preview}
            alt="preview icon"
            icon="./icons/link_white.svg"
            sticky={false}
          />
        )}
      </div>
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

    .hoverBox {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 250ms ease-in-out,
        backdrop-filter 250ms ease-in-out;

      .stickyBtn {
        position: relative;
        top: -25px;
        width: 70px;
        height: 50px;
        opacity: 0;
        .stickyIcon {
          height: 50px;
          width: 50px;
        }
      }
    }
  }

  .projectHero {
    display: block;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .projectInfos {
    height: 70px;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    position: relative;
    z-index: 1;

    .tags {
      display: flex;
      gap: 0.5rem;
      .icon {
        height: 25px;
        width: 25px;
      }
    }
  }
`;

export default ProjectCard;
