import styled from "styled-components";

type ImageType = {
  img: string;
  alt: string;
};

const ProfilPicture = ({ img, alt }: ImageType) => {
  return (
    <ProfilPictureStyled>
      <img src={img} alt={alt} />
    </ProfilPictureStyled>
  );
};

const ProfilPictureStyled = styled.div`
  position: relative;
  width: 20vw;
  min-width: 250px;
  max-width: 350px;
  height: 20vw;
  min-height: 250px;
  max-height: 350px;
  border-radius: 100%;
  background: linear-gradient(#e710ab, #2a95ed);

  img {
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
`;

export default ProfilPicture;
