import styled from "styled-components";
import useStoreTheme from "../../stores/theme.store";
import { ProjectType } from "../../types/project.type";

const ModalProjectText = ({ project }: { project: ProjectType }) => {
  const { theme } = useStoreTheme();

  return (
    <ModalProjectTextStyled>
      <div className="header">
        <h3 className="title">{project.title}</h3>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="description">{project.description}</p>
      <div className="links">
        <a
          href={project.links.github}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <img
            src={
              theme === "dark"
                ? "./icons/github_white.svg"
                : "./icons/github_black.svg"
            }
            alt="icon github"
          />
          Voir le repository
        </a>
        <a
          href={project.links.preview}
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          <img
            src={
              theme === "dark"
                ? "./icons/link_white.svg"
                : "./icons/link_black.svg"
            }
            alt="icon github"
          />
          Voir la preview
        </a>
      </div>
    </ModalProjectTextStyled>
  );
};

const ModalProjectTextStyled = styled.section`
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    gap: 10px;

    .title {
      flex: 1 0 fit-content;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.2;
      color: var(--mainColor);
    }

    .tags {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      flex-wrap: wrap;

      .tag {
        background: linear-gradient(
          140deg,
          var(--mainColor),
          #8436ea,
          var(--secondColor)
        );
        color: #fff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.2rem 0.8rem;
        border-radius: 20px;
        white-space: nowrap;
      }
    }
  }
  .description {
    text-align: justify;
    font-size: 0.9rem;
  }
  .links {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    .link {
      font-size: 0.9rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      transition: opacity 200ms ease-out;
      &:hover {
        opacity: 0.7;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default ModalProjectText;
