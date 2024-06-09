import { useEffect } from "react";
import styled from "styled-components";
import useStoreNavbar from "../../stores/navbar.store";
import NavbarIcons from "./NavbarIcons";
import NavbarLinks from "./NavbarLinks";

const ButtonsContainer = () => {
  const { responsiveMode, menuIsOpen } = useStoreNavbar();

  useEffect(() => {
    menuIsOpen
      ? (document.body.style.overflow = "hidden")
      : document.body.style.removeProperty("overflow");
  }, [menuIsOpen]);

  return (
    <ButtonsContainerStyled
      className={`${responsiveMode} ${menuIsOpen ? "open" : ""}`}
    >
      <NavbarLinks />
      <NavbarIcons />
    </ButtonsContainerStyled>
  );
};

const ButtonsContainerStyled = styled.div`
  &.desktop {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &.mobile {
    width: 100vw;
    height: 0vh;
    position: absolute;
    z-index: -1;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: var(--background);
    transition: height 50ms ease-out;

    &.open {
      height: 100vh;
      transition: height 250ms ease-in;
    }
  }
`;

export default ButtonsContainer;
