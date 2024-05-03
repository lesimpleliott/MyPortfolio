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
      <div className="container">
        <NavLink to="/">
          <Logo height={30} />
        </NavLink>

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
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  .container {
    width: 100%;
    padding-inline: 5vw;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

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
