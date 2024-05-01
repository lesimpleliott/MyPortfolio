import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";

import Dock from "../components/Dock";
import Stack from "../components/Stack";

const Home = () => {
  return (
    <HomeStyled>
      <HeroBanner />

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
`;

export default Home;
