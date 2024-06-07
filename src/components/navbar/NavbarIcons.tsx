import styled from "styled-components";
import useStoreNavbar from "../../navbar.store";
import useStoreTheme from "../../theme.store";
import StickyButton from "../StickyButton";

const NavbarIcons = () => {
  const { toggleTheme } = useStoreTheme();
  const { responsiveMode } = useStoreNavbar();

  return (
    <NavBarIconsStyled className={responsiveMode}>
      <StickyButton
        link="https://github.com/lesimpleliott"
        iconDark="./icons/github_white.svg"
        iconLight="./icons/github_black.svg"
        alt="github icon"
      />
      <StickyButton
        link="https://www.linkedin.com/in/lesimpleliott/"
        iconDark="./icons/linkedin_white.svg"
        iconLight="./icons/linkedin_black.svg"
        alt="linkedin icon"
      />
      <StickyButton
        function={toggleTheme}
        iconDark="./icons/light_white.svg"
        iconLight="./icons/dark_black.svg"
        alt="theme icon"
      />
    </NavBarIconsStyled>
  );
};

// STYLED-COMPONENTS
export const NavBarIconsStyled = styled.div`
  &.desktop {
    display: flex;
    align-items: center;
  }
  &.mobile {
    display: none;
  }
`;

export default NavbarIcons;
