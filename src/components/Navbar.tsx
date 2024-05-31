import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useStoreTheme from "../theme.store";
import StickyButton from "./StickyButton";

const Navbar = () => {
  const { theme, setTheme } = useStoreTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("sysTheme", "false");
  };

  const navbarDisplay = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.innerWidth < 768) {
        navbar.classList.add("mobile");
        navbar.classList.remove("desktop");
      } else {
        navbar.classList.remove("mobile");
        navbar.classList.add("desktop");
      }
    }
  };

  const toggleNavbar = () => {
    const navbarToggle = document.querySelector(".navbarToggleMenu");
    const navbarContent = document.querySelector(".navbarContent");
    if (navbarToggle && navbarContent) {
      navbarToggle.classList.toggle("open");
      navbarContent.classList.toggle("open");
    }
  };

  useEffect(() => {
    navbarDisplay();
    window.addEventListener("resize", navbarDisplay);
  }, []);

  return (
    <NavbarStyled id="navbar">
      <button className="navbarToggleMenu" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbarContent">
        <ul className="navbarContent__links">
          <NavLink to="/#stack" onClick={toggleNavbar}>
            <li>Stack</li>
          </NavLink>
          <NavLink to="/#projects" onClick={toggleNavbar}>
            <li>Projets</li>
          </NavLink>
          <NavLink to="/about" onClick={toggleNavbar}>
            <li>À propos</li>
          </NavLink>
          <NavLink to="/contact" onClick={toggleNavbar}>
            <li>Contact</li>
          </NavLink>
        </ul>

        <div className="navbarContent__icons">
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
        </div>
      </div>
    </NavbarStyled>
  );
};

// STYLED-COMPONENTS
const NavbarStyled = styled.nav`
  &.desktop {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .navbarContent {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 20px;

      &__links {
        flex: 1;
        display: flex;
        justify-content: end;
        gap: 20px;

        li {
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          &::after {
            content: "";
            display: block;
            width: 0%;
            height: 2px;
            border-radius: 2px;
            background-color: var(--mainColor);
            transition: width 200ms ease-in-out;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
      &__icons {
        display: flex;
        align-items: center;
      }
    }

    .navbarToggleMenu {
      display: none;
    }
  }

  &.mobile {
    .navbarContent {
      height: 0vh;
      width: 100vw;
      position: absolute;
      inset: 0;
      overflow: hidden;
      background-color: var(--background);
      z-index: -1;
      transition: height 100ms ease-in-out;
      &.open {
        height: 100vh;
        transition: height 350ms ease-in-out;
      }

      &__links {
        margin-top: 80px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        li {
          width: 100vw;
          padding: 10px;
          font-size: 2rem;
          font-weight: 500;
          text-align: center;
          &:hover {
            background: rgba(0, 0, 0, 0.2);
          }
        }
      }

      &__icons {
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;

        .stickyIcon {
          width: 50px;
          height: 50px;
        }
      }
    }

    .navbarToggleMenu {
      height: 35px;
      width: 35px;
      position: absolute;
      top: 50%;
      right: 5vw;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;

      span {
        display: block;
        width: 100%;
        height: 3px;
        background-color: var(--text);
        border-radius: 10px;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
        transition: transform 200ms ease-in-out, width 200ms ease-in-out;
        &::after {
          content: "";
          display: block;
          width: 0%;
          height: 100%;
          background-color: var(--mainColor);
          opacity: 0.4;
          transition: width 150ms ease-in-out;
        }
        &:nth-child(1)::after {
          transition-delay: 100ms;
        }
        &:nth-child(2)::after {
          transition-delay: 50ms;
        }
        &:nth-child(3)::after {
          transition-delay: 0;
        }
      }
      &.open {
        span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        span:nth-child(2) {
          width: 0;
        }
        span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
      &:hover span::after {
        width: 100%;
      }
    }
  }
`;

export default Navbar;
