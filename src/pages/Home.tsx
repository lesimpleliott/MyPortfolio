import styled from "styled-components";
import HeroBanner from "../components/HeroBanner";
import MyApps from "../components/MyApps";
import dataApp from "../datas/myApps.json";

const Home = () => {
  return (
    <HomeStyled>
      <HeroBanner />

      <section className="stack">
        <h2>Stack</h2>
        <h3>Technologies avec lesquelles je travaille</h3>

        <h3>Les Apps que j'utilise tous les jours</h3>
        <div className="dock">
          <ul>
            {dataApp.map((app, index) => (
              <MyApps key={index} data={app} />
            ))}
          </ul>
        </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  .dock {
    display: inline-block;
    padding: 2px 4px;
    border-radius: 16px;
    border: solid 2px rgb(148, 148, 148);
    background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2)
    );

    ul {
      display: flex;
      justify-content: center;
      align-items: end;
      list-style: none;

      @media screen and (max-width: 728px) {
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
      }
    }
  }
`;

export default Home;
