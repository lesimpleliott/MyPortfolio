import styled from "styled-components";
import HeroBanner from "../layouts/HeroBanner";
import useStoreTheme from "../theme.store";

const Home = () => {
  const { theme } = useStoreTheme();

  return (
    <HomeStyled>
      <HeroBanner
        backgroundImage="./cover_eLeGaragePortfolio.webp"
        profilPicture="./eliott.webp"
        profilPictureAlt="Photo d'Eliott Lesimple - Développeur web FrontEnd"
      >
        <h1 className="bannerTitle">
          Hello world {theme === "dark" ? "🤘" : "👋"},
          <br /> Je suis <strong>Eliott Lesimple,</strong>
          <br /> développeur Front-end.
        </h1>
      </HeroBanner>
      {/* 
      <section className="stack">
        <h2>Stack</h2>
        <h3>Technologies avec lesquelles je travaille</h3>
        <Stack />
        <h3>Les Apps que j'utilise tous les jours</h3>
        <Dock />
      </section>

      <section className="projects">
        <h2>Mes projets</h2>
        <h3>Les projets sur lesquels j'ai travaillé depuis mes débuts.</h3>

        <div className="projectsContainer">
          {dataProjects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section> */}
    </HomeStyled>
  );
};

// STYLED-COMPONENTS
const HomeStyled = styled.main`
  .stack {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;

    .projectsContainer {
      max-width: 1024px;
      margin-block-start: 50px;
      margin-block-end: 100px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  }
`;

export default Home;
