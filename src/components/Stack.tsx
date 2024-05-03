import styled from "styled-components";
import dataStack from "../datas/myStack.json";

const Stack = () => {
  return (
    <StackStyled>
      <ul>
        {dataStack.map((stack, index) => (
          <li key={index}>
            <img src={stack.icon} alt={stack.name} />
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
  margin-block-end: 75px;

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
      justify-self: center;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 1024px) {
        width: 20vw;
        max-width: 125px;
      }

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;

export default Stack;
