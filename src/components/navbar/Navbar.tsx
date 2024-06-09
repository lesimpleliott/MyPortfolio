import styled from "styled-components";
import useResponsiveMode from "../../hooks/useResponsiveMode";
import useStoreNavbar from "../../stores/navbar.store";
import BurgerBtn from "./BurgerBtn";
import ButtonsContainer from "./ButtonsContainer";

const Navbar = () => {
  useResponsiveMode();
  const { responsiveMode } = useStoreNavbar();

  return (
    <NavbarStyled className={responsiveMode}>
      <BurgerBtn />
      <ButtonsContainer />
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  &.desktop {
    flex: 1;
    gap: 20px;
  }
  &.mobile {
    width: 100%;
    position: absolute;
    padding: 5vw;
  }
`;

export default Navbar;
