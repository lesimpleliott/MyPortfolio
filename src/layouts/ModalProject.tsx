import { useEffect } from "react";
import styled from "styled-components";
import myProjects from "../assets/datas/myProjects.json";
import useStoreProject from "../stores/project.store";
import useStoreTheme from "../stores/theme.store";

const ModalProject = () => {
  const { theme } = useStoreTheme();
  const { modalIsOpen, setModalIsOpen, tabIndex, setTabIndex } =
    useStoreProject();

  const project = myProjects[tabIndex];

  const nextProject = () => {
    if (tabIndex < myProjects.length - 1) {
      setTabIndex(tabIndex + 1);
    } else {
      setTabIndex(0);
    }
  };
  const prevProject = () => {
    if (tabIndex > 0) {
      setTabIndex(tabIndex - 1);
    } else {
      setTabIndex(myProjects.length - 1);
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);
    modalIsOpen && document.body.style.removeProperty("overflow");
  };

  useEffect(() => {
    // Gestion du scroll
    modalIsOpen
      ? (document.body.style.overflow = "hidden")
      : document.body.style.removeProperty("overflow");

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
        <button className="prev" onClick={prevProject}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className="next" onClick={nextProject}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
        <button className="close" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </nav>

      <article className="modalWrapper">
        <section className="modalBanner">
          <img src={project.images.hero} alt="" className="hero" />
          <div className="mockup">
            {project.images.desktop && (
              <img src={project.images.desktop} alt="" />
            )}
            {project.images.mobile && (
              <img src={project.images.mobile} alt="" />
            )}
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

const ModalProjectStyled = styled.aside`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 300ms ease-out forwards;

  .modalNavbar,
  .modalWrapper {
    width: 80%;
    max-width: 768px;
  }

  .modalNavbar {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    z-index: 100;
    padding: 1rem;

    button {
      width: 25px;
      height: 25px;
      border-radius: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      border: solid 2px #fff;
      display: flex;
      align-items: center;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
      justify-content: center;
      transition: background-color 200ms ease-out;
      animation: modalScaleIn 200ms 100ms ease-out both;

      &.prev {
        animation-delay: 100ms;
      }
      &.next {
        animation-delay: 150ms;
      }

      &.prev,
      &.next {
        &:active {
          background-color: var(--secondColor);
        }
      }
      &.close {
        animation-delay: 200ms;
        &:hover {
          background-color: #c30000;
        }
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
    animation: modalScaleIn 300ms ease-in-out;

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
      padding: 2rem 2rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .modalHeader {
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
    }
  }

  @keyframes fadeIn {
    from {
      background-color: none;
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
    }
    to {
      background-color: var(--backgroundOpacity);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  }

  @keyframes modalScaleIn {
    0% {
      transform: scale(0);
    }
    60% {
      transform: scale(1.05);
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default ModalProject;
