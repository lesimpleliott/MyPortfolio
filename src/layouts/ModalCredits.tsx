import styled from "styled-components";

const ModalCredits = () => {
  return (
    <ModalCreditsStyled>
      <h2>Crédits</h2>
      <p>
        Images :{" "}
        <a href="https://unsplash.com/fr" target="_blank">
          Unsplash
        </a>{" "}
        &{" "}
        <a href="https://freepik.com/" target="_blank">
          Freepik
        </a>
      </p>
      <p>
        Icons :{" "}
        <a href="https://fontawesome.com/" target="_blank">
          Font Awesome
        </a>
      </p>
    </ModalCreditsStyled>
  );
};

const ModalCreditsStyled = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    color: var(--text);
    padding-bottom: 20px;
  }
  p {
    line-height: 2.5;
  }

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default ModalCredits;
