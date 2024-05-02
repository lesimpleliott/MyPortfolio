import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  const toggleTheme = () => {
    const theme = document.body.getAttribute("data-theme");
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };

  return (
    <HeaderStyled>
      <div className="container">
        <NavLink to="/">
          <Logo height={40} />
        </NavLink>

        <div className="navbar">
          <ul className="navbar">
            <li>
              <NavLink to="#stack">Stack</NavLink>
            </li>
            <li>
              <a href="#projects">Projets</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <section className="icons">
          <button className="headerBtn" id="toggleThemeBtn">
            <img src="./icons/github_white.webp" alt="" />
          </button>
          <button className="headerBtn" id="toggleThemeBtn">
            <img src="./icons/linkedin_white.webp" alt="" />
          </button>
          <button
            onClick={toggleTheme}
            className="headerBtn"
            id="toggleThemeBtn"
          >
            <img src="./icons/theme_white.webp" alt="" />
          </button>
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
  z-index: 1;
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
    gap: 30px;
  }

  .navbar {
    flex: 1;
    display: flex;
    justify-content: end;
    gap: 20px;

    font-size: 1rem;
  }

  .icons {
    display: flex;
    gap: 15px;

    .headerBtn {
      all: unset;

      img {
        height: 25px;
        width: 25px;
      }
    }
  }
`;

export default Header;
