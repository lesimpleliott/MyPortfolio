import styled from "styled-components";
import HeroBanner from "../layouts/HeroBanner";

import Dock from "../components/Dock";
import Stack from "../components/Stack";

const Home = () => {
  return (
    <HomeStyled>
      <HeroBanner />

      <section className="stack" id="stack">
        <h2>Stack</h2>
        <h3>Technologies avec lesquelles je travaille</h3>
        <Stack />
        <h3>Les Apps que j'utilise tous les jours</h3>
        <Dock />
      </section>

      <section className="projects" id="projects">
        <h2>Mes projets</h2>
        <h3>Les projets sur lesquels j'ai travaillé depuis mes débuts.</h3>
        <div className="blank"></div>
      </section>
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

  .blank {
    height: 100vh;
  }
`;

export default Home;
