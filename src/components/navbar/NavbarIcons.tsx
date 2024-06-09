import styled from "styled-components";
import useStoreNavbar from "../../stores/navbar.store";
import useStoreTheme from "../../stores/theme.store";
import StickyButton from "../StickyButton";

const NavbarIcons = () => {
  const { toggleTheme } = useStoreTheme();
  const { responsiveMode, menuIsOpen } = useStoreNavbar();

  return (
    <NavBarIconsStyled
      className={`${responsiveMode} ${menuIsOpen ? "open" : ""}`}
    >
      <StickyButton
        link="https://github.com/lesimpleliott"
        iconDark="./icons/github_white.svg"
        iconLight="./icons/github_black.svg"
        alt="github icon"
        sticky={responsiveMode === "desktop" ? true : false}
      />
      <StickyButton
        link="https://www.linkedin.com/in/lesimpleliott/"
        iconDark="./icons/linkedin_white.svg"
        iconLight="./icons/linkedin_black.svg"
        alt="linkedin icon"
        sticky={responsiveMode === "desktop" ? true : false}
      />
      <StickyButton
        function={toggleTheme}
        iconDark="./icons/light_white.svg"
        iconLight="./icons/dark_black.svg"
        alt="theme icon"
        sticky={responsiveMode === "desktop" ? true : false}
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
    display: flex;
    align-items: center;
    gap: 50px;
    opacity: 0;
    transition: opacity 0ms ease-in-out;

    .stickyIcon {
      height: 50px;
      width: 50px;
    }

    &.open {
      opacity: 1;
      transition: opacity 250ms 100ms ease-in-out;
    }
  }
`;

export default NavbarIcons;
