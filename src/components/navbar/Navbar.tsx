import styled from "styled-components";
import useResponsiveMode from "../../hooks/useResponsiveMode";
import useStoreNavbar from "../../navbar.store";
import BurgerBtn from "./BurgerBtn";
import NavbarIcons from "./NavbarIcons";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  useResponsiveMode();
  const { responsiveMode } = useStoreNavbar();

  return (
    <NavbarStyled className={responsiveMode}>
      <BurgerBtn />
      <NavbarLinks />
      <NavbarIcons />
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
  }
`;

export default Navbar;
