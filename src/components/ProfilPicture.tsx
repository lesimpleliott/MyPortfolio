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
  min-width: 200px;
  max-width: 300px;
  height: 20vw;
  min-height: 200px;
  max-height: 300px;
  border-radius: 100%;
  background: var(--gradient);

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
