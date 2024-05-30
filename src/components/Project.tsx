import styled from "styled-components";
import myStack from "../assets/datas/myStack.json";
import StickyButton from "./StickyButton";

type ProjectProps = {
  id: number;
  title: string;
  descritpion: string;
  tags: string[];
  images: {
    hero: string;
    desktop: string;
    mobile: string;
  };
  links: {
    github?: string;
    preview?: string;
  };
};

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <ProjectCardStyled>
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
          link="#"
          alt="details icon"
          icon="./icons/infos_white_100w.webp"
        />

        {project.links.github && (
          <StickyButton
            link={project.links.github}
            alt="github icon"
            icon="./icons/github_white_100w.webp"
          />
        )}

        {project.links.preview && (
          <StickyButton
            link={project.links.preview}
            alt="preview icon"
            icon="./icons/link_white_100w.webp"
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
  transition: background-color 250ms ease-in-out, transform 250ms ease-out,
    box-shadow 250ms ease-in;

  &:hover {
    /* transform: scale(1.02); */
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);

    .hoverBox {
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
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
      width: 70px;
      height: 50px;
      opacity: 0;
      .stickyIcon {
        height: 50px;
        width: 50px;
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
      gap: 0.7rem;
      .icon {
        height: 30px;
        width: 30px;
      }
    }
  }
`;

export default Project;
