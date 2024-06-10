import { useEffect } from "react";
import styled from "styled-components";
import ModalCredits from "../../layouts/ModalCredits";
import ModalProject from "../../layouts/ModalProject";
import { useStoreModal } from "../../stores/modal.store";
import ModalNavbar from "./ModalNavbar";

const Modal = () => {
  const { modalIsOpen, modalContent } = useStoreModal();

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = "hidden")
      : document.body.style.removeProperty("overflow");
  });

  return (
    <ModalStyled>
      {modalContent === "project" && <ModalNavbar next previous />}
      {modalContent === "credits" && <ModalNavbar />}

      <div className="modalContent">
        {modalContent === "project" && <ModalProject />}
        {modalContent === "credits" && <ModalCredits />}
      </div>
    </ModalStyled>
  );
};

const ModalStyled = styled.aside`
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

  .modalContent {
    width: 80%;
    max-width: 768px;
    position: relative;
    max-height: 80%;
    background-color: var(--background);
    border: solid 3px #fff;
    border-radius: 10px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    overflow-y: auto;
    animation: modalScaleIn 300ms ease-in-out;
  }
`;

export default Modal;
