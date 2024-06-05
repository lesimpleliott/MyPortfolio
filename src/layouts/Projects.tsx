import styled from "styled-components";
import myProjects from "../assets/datas/myProjects.json";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <ProjectsStyled>
      {myProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.div`
  max-width: 1024px;
  margin-block-start: 50px;
  margin-block-end: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export default Projects;
