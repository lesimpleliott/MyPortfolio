import { useEffect } from "react";
import styled from "styled-components";
import myProjects from "../../assets/datas/myProjects.json";
import useStoreProject from "../../stores/project.store";

type ModalNavbarProps = {
  previous?: boolean;
  next?: boolean;
};

const ModalNavbar = ({ previous, next }: ModalNavbarProps) => {
  const { modalIsOpen, setModalIsOpen, tabIndex, setTabIndex } =
    useStoreProject();

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
    <ModalNavbarStyled>
      {previous && (
        <button className="prev" onClick={prevProject}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
      )}
      {next && (
        <button className="next" onClick={nextProject}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      )}
      <button className="close" onClick={closeModal}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </ModalNavbarStyled>
  );
};

const ModalNavbarStyled = styled.nav`
  width: 80%;
  max-width: 768px;
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
      animation-delay: 150ms;
    }
    &.next {
      animation-delay: 125ms;
    }

    &.prev,
    &.next {
      &:active {
        background-color: var(--secondColor);
      }
    }
    &.close {
      animation-delay: 100ms;
      &:hover {
        background-color: #c30000;
      }
    }
  }
`;

export default ModalNavbar;
