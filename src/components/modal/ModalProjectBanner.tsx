import styled from "styled-components";
import { ProjectType } from "../../types/project.type";

const ModalProjectBanner = ({ project }: { project: ProjectType }) => {
  return (
    <ModalProjectBannerStyled>
      <img
        src={project.images.hero}
        alt={`Cover du projet ${project.title}`}
        className="hero"
      />
      <div className="mockups">
        {project.images.desktop && (
          <img
            src={project.images.desktop}
            alt={`Aperçu desktop du projet ${project.title}`}
            className="mockup"
          />
        )}
        {project.images.mobile && (
          <img
            src={project.images.mobile}
            alt={`Aperçu mobile du projet ${project.title}`}
            className="mockup"
          />
        )}
      </div>
    </ModalProjectBannerStyled>
  );
};

const ModalProjectBannerStyled = styled.section`
  width: 100%;
  height: 200px;
  position: relative;

  .hero {
    width: 100%;
    height: 100%;
    opacity: 0.2;
    object-fit: cover;
  }
  .mockups {
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    gap: 1rem;
    filter: drop-shadow(0px 5px 16px black);

    .mockup {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
`;
export default ModalProjectBanner;
