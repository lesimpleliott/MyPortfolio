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
  margin-block-start: 3vw;
  margin-block-end: 5vw;

  ul {
    display: grid;
    grid-column-gap: 5vw;
    grid-row-gap: 30px;
    grid-template-columns: repeat(6, 1fr);

    li {
      list-style: none;
      width: 100px;
      max-width: 150px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
`;

export default Stack;
