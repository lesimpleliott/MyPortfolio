import { useEffect, useState } from "react";
import styled from "styled-components";
import myProjects from "../assets/datas/myProjects.json";
import useStoreProject from "../project.store";
import useStoreTheme from "../theme.store";

const ModalProject = () => {
  const { theme } = useStoreTheme();
  const { setModalIsOpen } = useStoreProject();

  // ******** A GARDER ???? ********
  const [index, setIndex] = useState(0);
  const project = myProjects[index];
  // ******** A GARDER ???? ********

  const nextProject = () => {
    if (index < myProjects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const prevProject = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(myProjects.length - 1);
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Gestion des touches clavier
    const handleNext = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextProject();
      }
    };
    const handlePrev = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevProject();
      }
    };
    const handleClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    // Ajout des eventListener
    window.addEventListener("keydown", handleNext);
    window.addEventListener("keydown", handlePrev);
    window.addEventListener("keydown", handleClose);

    // Nettoyage des eventListener
    return () => {
      window.removeEventListener("keydown", handleNext);
      window.removeEventListener("keydown", handlePrev);
      window.removeEventListener("keydown", handleClose);
    };
  });

  return (
    <ModalProjectStyled className="modalProject">
      <nav className="modalNavbar">
        <button onClick={prevProject}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button onClick={nextProject}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
        <button onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </nav>

      <article className="modalWrapper">
        <section className="modalBanner">
          <img src={project.images.hero} alt="" className="hero" />
          <div className="mockup">
            <img src={project.images.desktop} alt="" />
            <img src={project.images.mobile} alt="" />
          </div>
        </section>
        <section className="modalContent">
          <div className="modalHeader">
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
        </section>
      </article>
    </ModalProjectStyled>
  );
};

const ModalProjectStyled = styled.section`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: var(--backgroundOpacity);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .modalNavbar,
  .modalWrapper {
    width: 80%;
    max-width: 768px;
  }

  .modalNavbar {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    z-index: 100;
    padding: 0.5rem;

    button {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      border: solid 2px #fff;
      display: flex;
      align-items: center;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
      justify-content: center;
      transition: background-color 200ms ease-out;

      &:hover {
        background-color: var(--secondColor);
      }
    }
  }

  .modalWrapper {
    position: relative;
    max-height: 80%;
    background-color: var(--background);
    border: solid 3px #fff;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    overflow-y: auto;

    .modalBanner {
      width: 100%;
      height: 200px;
      position: relative;

      .hero {
        width: 100%;
        height: 100%;
        opacity: 0.2;
        object-fit: cover;
      }
      .mockup {
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        gap: 1rem;
        filter: drop-shadow(0px 5px 16px black);

        img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
      }
    }

    .modalContent {
      padding: 1rem 2rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .modalHeader {
        display: flex;
        align-content: center;
        flex-wrap: wrap;

        .title {
          flex: 1 0 fit-content;
          font-size: 2rem;
          color: var(--mainColor);
          white-space: nowrap;
        }

        .tags {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5px;
          flex-wrap: nowrap;

          .tag {
            background: linear-gradient(
              90deg,
              var(--mainColor),
              var(--secondColor)
            );
            color: #fff;
            font-size: 0.8rem;
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
    }
  }
`;

export default ModalProject;
