import styled from "styled-components";
import Logo from "../components/Logo";
import Navbar from "../components/navbar/Navbar";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="headerContainer">
        <Logo height={35} />
        <Navbar />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 70px;
  width: 100%;
  position: fixed;
  z-index: 10;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;

  .headerContainer {
    height: 100%;
    width: 100%;
    max-width: calc(1024px + 2 * 5vw);
    padding-inline: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export default Header;
