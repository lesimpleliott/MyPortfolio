import styled from "styled-components";
import { useStoreModal } from "../../stores/modal.store";

const Credits = () => {
  const { setModalIsOpen, setModalContent } = useStoreModal();
  const openModal = () => {
    setModalIsOpen(true);
    setModalContent("credits");
  };

  return (
    <CreditsStyled>
      <li>
        Made by <strong>Eliott Lesimple</strong> with <strong>Love</strong> and{" "}
        <strong>lots of coffee</strong>
      </li>
      <li>
        © 2024 - Tous droits réservés -{" "}
        <button id="credits" onClick={openModal}>
          Crédits
        </button>
      </li>
    </CreditsStyled>
  );
};

const CreditsStyled = styled.ul``;

export default Credits;
