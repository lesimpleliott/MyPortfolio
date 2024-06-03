import styled from "styled-components";
import ProfilPicture from "../components/ProfilPicture";

type HeroBannerType = {
  profilPicture: string;
  profilPictureAlt: string;
  children: React.ReactNode;
  backgroundImage?: string;
};

const HeroBanner: React.FC<HeroBannerType> = (props) => {
  return (
    <HeroBannerStyled>
      {props.backgroundImage && (
        <div className="bannerBackground">
          <img src={props.backgroundImage} alt={props.profilPictureAlt} />
        </div>
      )}

      <div className="bannerContent">
        <ProfilPicture img={props.profilPicture} alt={props.profilPictureAlt} />
        <div className="childrenWrapper">{props.children}</div>
      </div>
    </HeroBannerStyled>
  );
};

const HeroBannerStyled = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .bannerBackground {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--heroBannerBackground);
      box-shadow: 0 -200px 50px -150px var(--background) inset;
      transition: box-shadow 250ms ease-in-out,
        background-color 250ms ease-in-out;
    }
  }

  .bannerContent {
    width: 100%;
    max-width: calc(1024px + 10vw);
    padding: 3vw 5vw;
    margin-top: 70px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 3vw;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-end;
      text-align: center;
      gap: 5vw;
    }

    .childrenWrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--text);
    }
  }
`;

export default HeroBanner;
