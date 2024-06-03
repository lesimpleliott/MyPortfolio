import styled from "styled-components";

type ImageType = {
  img: string;
  alt: string;
};

const ProfilPicture = ({ img, alt }: ImageType) => {
  return (
    <ProfilPictureStyled>
      <div className="imgWrapper">
        <img src={img} alt={alt} />
      </div>
    </ProfilPictureStyled>
  );
};

const ProfilPictureStyled = styled.div`
  display: flex;
  align-items: center;

  .imgWrapper {
    position: relative;
    width: 25vw;
    min-width: 250px;
    max-width: 300px;
    height: 25vw;
    min-height: 250px;
    max-height: 300px;
    border-radius: 100%;
    background: var(--gradient);
  }

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
