import styled from "styled-components";
import Dock from "../components/Dock";
import HeroBanner from "../layouts/HeroBanner";
import ModalProject from "../layouts/ModalProject";
import Projects from "../layouts/Projects";
import Stack from "../layouts/Stack";
import useStoreModal from "../stores/modal.store";
import useStoreTheme from "../stores/theme.store";

const Home = () => {
  const { theme } = useStoreTheme();
  const { modalIsOpen } = useStoreModal();

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
        <Projects />
      </section>

      {modalIsOpen && <ModalProject />}
    </HomeStyled>
  );
};

// STYLED-COMPONENTS
const HomeStyled = styled.main`
  .stack,
  .projects {
    height: 100%;
    width: 100%;
    max-width: 1024px;
    padding-inline: 5vw;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Home;
