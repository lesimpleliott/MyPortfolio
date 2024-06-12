import styled from "styled-components";

const SubmitContainer = () => {
  return (
    <SubmitContainerStyled>
      <button type="submit" className={`btn`}>
        envoyer
      </button>
      <p className="message">ici un message</p>
    </SubmitContainerStyled>
  );
};

const SubmitContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    width: 100%;
    height: 45px;
    margin-top: 0.5rem;
    text-align: center;
    background-color: var(--secondColor);
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 10px;
    transition: filter 200ms ease-out, box-shadow 200ms ease-out,
      background-color 200ms ease-out;

    &:hover {
      filter: brightness(1.4);
    }
    &:active {
      filter: brightness(0.8);
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25) inset;
    }
    &:focus {
      outline: solid 2px var(--mainColor);
    }

    &.sent {
      background-color: #38bd38;
    }
    &.error {
      background-color: #f60404;
      animation: shake 250ms ease-out;
    }
  }
  .message {
    font-size: 0.9rem;
    font-weight: 300;
    font-style: italic;
  }
`;

export default SubmitContainer;
