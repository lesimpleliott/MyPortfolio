import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import StickyButton from "./StickyButton";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    // const theme = document.body.getAttribute("data-theme");
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <HeaderStyled>
      <Logo height={30} />

      <div className="navbar">
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
      </div>

      <section className="icons">
        <StickyButton
          link="https://github.com/lesimpleliott"
          theme={theme}
          icon="./icons/github_white.webp"
          iconLight="./icons/github_black.webp"
          alt="github icon"
        />
        <StickyButton
          link="https://www.linkedin.com/in/lesimpleliott/"
          theme={theme}
          icon="./icons/linkedin_white.webp"
          iconLight="./icons/linkedin_black.webp"
          alt="linkedin icon"
        />
        <StickyButton
          function={toggleTheme}
          theme={theme}
          icon="./icons/theme_white.webp"
          iconLight="./icons/theme_black.webp"
          alt="theme icon"
        />
      </section>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  height: 70px;
  width: 100%;
  max-width: calc(1024px + 5vw);
  padding-inline: 5vw;
  margin: 0 auto;
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  gap: 20px;

  .navbar {
    flex: 1;
    display: flex;
    justify-content: end;
    gap: 15px;
    font-size: 1rem;
    font-weight: 500;
    li {
      cursor: pointer;
    }
  }

  .icons {
    display: flex;
    align-items: center;
  }
`;

export default Header;
