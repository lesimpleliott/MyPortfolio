import styled from "styled-components";
import myProjects from "../../assets/datas/myProjects.json";
import { useStoreModal } from "../../stores/modal.store";
import useStoreProject from "../../stores/project.store";
import { ProjectType } from "../../types/project.type";
import StickyButton from "../StickyButton";

const CardHover = ({ project }: { project: ProjectType }) => {
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
    <CardHoverStyled className="hoverBox">
      <StickyButton
        function={() => openModal(project.id, "project")}
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
    </CardHoverStyled>
  );
};

const CardHoverStyled = styled.div`
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
`;

export default CardHover;
