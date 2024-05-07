import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useStoreTheme from "../theme.store";
import Logo from "./Logo";
import StickyButton from "./StickyButton";

const Header = () => {
  const { theme, setTheme } = useStoreTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <HeaderStyled>
      <div className="headerContainer">
        <Logo height={30} />

        <ul className="navbar">
          <NavLink to="/#stack">
            <li>Stack</li>
          </NavLink>
          <NavLink to="/#projects">
            <li>Projets</li>
          </NavLink>
          <NavLink to="/about">
            <li>À propos</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>

        <section className="icons">
          <StickyButton
            link="https://github.com/lesimpleliott"
            iconDark="./icons/github_white.webp"
            iconLight="./icons/github_black.webp"
            alt="github icon"
          />
          <StickyButton
            link="https://www.linkedin.com/in/lesimpleliott/"
            iconDark="./icons/linkedin_white.webp"
            iconLight="./icons/linkedin_black.webp"
            alt="linkedin icon"
          />
          <StickyButton
            function={toggleTheme}
            iconDark="./icons/light_white.webp"
            iconLight="./icons/dark_black.webp"
            alt="theme icon"
          />
        </section>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  inset: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;

  .headerContainer {
    width: 100%;
    max-width: 1024px;
    margin-inline: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .navbar {
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

    .icons {
      display: flex;
      align-items: center;
    }
  }
`;

export default Header;
