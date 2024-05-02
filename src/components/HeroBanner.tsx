import styled from "styled-components";
import ProfilPicture from "./ProfilPicture";

const HeroBanner = () => {
  return (
    <HeroBannerStyled>
      <div className="banner">
        <img src="./cover_eLeGaragePortfolio.webp" alt="" />
      </div>

      <div className="content">
        <h1 className="title">
          Hello world 👋,
          <br /> Je suis <strong>Eliott Lesimple,</strong>
          <br /> développeur Front-end.
        </h1>
        <ProfilPicture
          img="./eliott.webp"
          alt="Photo d'Eliott Lesimple - Développeur web FrontEnd"
        />
      </div>
    </HeroBannerStyled>
  );
};

const HeroBannerStyled = styled.section`
  width: 100vw;
  height: 500px;
  position: relative;
  padding: 0;
  margin-bottom: -70px;

  .banner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--heroBackground);
      box-shadow: 0 -200px 50px -150px var(--background) inset;
      transition: box-shadow 250ms ease-in-out,
        background-color 250ms ease-in-out;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8vw;
    @media (max-width: 728px) {
      flex-direction: column-reverse;
      gap: 5vw;
    }

    .title {
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      font-size: clamp(1.8rem, 4vw, 3rem);
      color: var(--text);
      transition: color 250ms ease-in-out;
    }
  }
`;

export default HeroBanner;
