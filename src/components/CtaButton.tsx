import styled from "styled-components";

//TYPESCRIPT
type CtaButtonTypes = {
  title: string;
  filePath: string;
};

//REACT
const CtaButton = (props: CtaButtonTypes) => {
  return (
    <CtaStyled>
      <div className="title">{props.title}</div>

      <div className="options">
        <a href={props.filePath} target="_blank">
          <i className="fa-solid fa-eye"></i>
        </a>
        <a href={props.filePath} download>
          <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </CtaStyled>
  );
};

//STYLED-COMPONENTS
const CtaStyled = styled.button`
  position: relative;
  z-index: 1;

  & .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 10px;
    background-color: var(--secondColor);
    color: #fff;
  }

  .options {
    width: 55%;
    height: 85%;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(0%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 10px 10px 10px 10px;
    z-index: -1;
    background: var(--cardBackground);
    transition: all 400ms cubic-bezier(0.77, 0, 0.175, 1);
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
      top: 0%;
      right: 0%;
      transform: translate(0%, 0%);
    }

    a {
      color: var(-text);
      font-size: 1.2rem;
      transition: color 250ms ease-in-out;
      &:hover {
        color: var(--secondColor);
      }
    }
  }
  &:hover {
    .options {
      transform: translate(calc(100% - 2px), -50%);
      border-radius: 0px 10px 10px 0px;
      @media screen and (max-width: 768px) {
        transform: translate(0%, calc(100% - 10px));
        border-radius: 0px 0px 10px 10px;
        padding-top: 8px;
      }
    }
  }
`;

export default CtaButton;
