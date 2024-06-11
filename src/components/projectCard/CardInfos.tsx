import styled from "styled-components";
import myStack from "../../assets/datas/myStack.json";
import { ProjectType } from "../../types/project.type";

const CardInfos = ({ project }: { project: ProjectType }) => {
  return (
    <CardInfosStyled>
      <h4 className="title">{project.title}</h4>
      <div className="tags">
        {project.tags?.map((tag, index) => {
          const stack = myStack.find((item) => item.name === tag);
          return (
            <img
              className="icon"
              key={index}
              src={stack?.icon}
              alt={`icon de ${stack?.name}`}
            />
          );
        })}
      </div>
    </CardInfosStyled>
  );
};

const CardInfosStyled = styled.div`
  height: 70px;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: relative;
  z-index: 1;

  .tags {
    display: flex;
    gap: 0.5rem;
    .icon {
      height: 25px;
      width: 25px;
    }
  }
`;

export default CardInfos;
