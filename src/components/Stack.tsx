import styled from "styled-components";
import dataStack from "../datas/myStack.json";

const Stack = () => {
  return (
    <StackStyled>
      <ul>
        {dataStack.map((stack, index) => (
          <li key={index}>
            <img className="icon" src={stack.icon} alt={stack.name} />
            <span className="name">{stack.name}</span>
          </li>
        ))}
      </ul>
    </StackStyled>
  );
};

const StackStyled = styled.div`
  width: 100%;
  max-width: 1024px;
  margin-block-start: 50px;
  margin-block-end: 100px;

  ul {
    width: 100%;
    display: grid;
    grid-column-gap: 5vw;
    grid-row-gap: 30px;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 15px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 15px;
      grid-row-gap: 40px;
    }

    li {
      width: 10vw;
      max-width: 100px;
      height: 10vw;
      max-height: 100px;
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      @media screen and (max-width: 1024px) {
        width: 20vw;
        height: 20vw;
      }

      &:hover {
        .icon {
          top: -15px;
        }
        .name {
          bottom: -15px;
          opacity: 1;
        }
      }

      .icon {
        width: 100%;
        object-fit: contain;
        position: absolute;
        top: 0;
        z-index: 1;
        transition: top 300ms ease-out;
      }

      .name {
        font-family: "Bebas Neue", sans-serif;
        font-size: 1.2rem;
        white-space: nowrap;
        text-align: center;
        position: absolute;
        bottom: 0;
        opacity: 0;
        transition: bottom 300ms ease-out, opacity 300ms ease-out;
      }
    }
  }
`;

export default Stack;
