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
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          harum quas velit, laudantium earum sequi dignissimos mollitia iusto
          voluptas nemo aut est corrupti reiciendis odit esse omnis deleniti
          inventore obcaecati rem pariatur. Commodi voluptatem optio porro
          perferendis facilis eaque tenetur aspernatur distinctio officiis. Nisi
          placeat beatae alias nesciunt officia? Ad totam odio dolorum autem
          animi voluptate quaerat dolore id. Veniam asperiores optio deleniti
          sapiente officia id accusantium voluptates, iusto eligendi molestiae
          doloremque veritatis hic, fuga fugiat cumque voluptatibus ab alias
          voluptatem nulla, obcaecati ut. Similique, magnam quibusdam molestiae
          eligendi earum neque vitae excepturi alias nemo eos officia minus,
          aspernatur cum!
        </p>

        <h3>Les Apps que j'utilise tous les jours</h3>
        <div className="content dock">
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
  .stack {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dock {
    padding: 4px 6px;
    border-radius: 16px;
    border: solid 1px rgb(148, 148, 148);
    background: linear-gradient(
      rgba(79, 79, 79, 0.2),
      rgba(255, 255, 255, 0.4)
    );

    ul {
      display: flex;
      align-items: end;
      list-style: none;

      /* @media screen and (max-width: 1024px) {
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
      } */
    }
  }
`;

export default Home;
