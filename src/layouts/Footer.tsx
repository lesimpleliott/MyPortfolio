import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/Logo";
import StickyButton from "../components/StickyButton";
import useStoreTheme from "../stores/theme.store";

const Footer = () => {
  const { theme, setTheme } = useStoreTheme();
  const getSysTheme = localStorage.getItem("sysTheme");
  const location = useLocation();

  const setSystemTheme = () => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
    // Ajouter class "activeTheme" à l'option choisie
    localStorage.setItem("sysTheme", "true");
  };

  const setDarkTheme = () => {
    setTheme("dark");
    // Ajouter class "activeTheme" à l'option choisie
    localStorage.setItem("sysTheme", "false");
  };

  const setLightTheme = () => {
    setTheme("light");
    // Ajouter class "activeTheme" à l'option choisie
    localStorage.setItem("sysTheme", "false");
  };

  return (
    <FooterStyled>
      <div className="footerContainer">
        {location.pathname !== "/contact" && (
          <section className="socials">
            <Logo height={30} />
            <div className="icons">
              <StickyButton
                link="mailto:lesimpleliott@gmail.com"
                iconDark="./icons/mail_white.svg"
                iconLight="./icons/mail_black.svg"
                alt="mail icon"
              />
              <StickyButton
                link="tel: +33663991329"
                iconDark="./icons/telephone_white.svg"
                iconLight="./icons/telephone_black.svg"
                alt="mail icon"
              />
              <StickyButton
                link="https://github.com/lesimpleliott"
                iconDark="./icons/github_white.svg"
                iconLight="./icons/github_black.svg"
                alt="github icon"
              />
              <StickyButton
                link="mailto:https://www.linkedin.com/in/lesimpleliott/"
                iconDark="./icons/linkedin_white.svg"
                iconLight="./icons/linkedin_black.svg"
                alt="linkedin icon"
              />
            </div>
          </section>
        )}

        <section className="credits">
          <ul>
            <li>
              Made by <strong>Eliott Lesimple</strong> with{" "}
              <strong>Love</strong> and <strong>lots of coffee</strong>
            </li>
            <li>© 2024 - Tous droits réservés</li>
          </ul>
          <div className="icons">
            <StickyButton
              function={setSystemTheme}
              iconDark="./icons/system_white.svg"
              iconLight="./icons/system_black.svg"
              alt="system theme"
              active={getSysTheme === "true" ? true : false}
            />
            <StickyButton
              function={setDarkTheme}
              iconDark="./icons/dark_white.svg"
              iconLight="./icons/dark_black.svg"
              alt="dark theme"
              active={
                getSysTheme === "false" && theme === "dark" ? true : false
              }
            />
            <StickyButton
              function={setLightTheme}
              iconDark="./icons/light_white.svg"
              iconLight="./icons/light_black.svg"
              alt="light theme"
              active={
                getSysTheme === "false" && theme === "light" ? true : false
              }
            />
          </div>
        </section>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .footerContainer {
    width: 100%;
    max-width: 1024px;
    margin-inline: 5vw;

    .socials,
    .credits {
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      font-weight: 200;
    }

    .credits {
      border-top: solid 1px grey;
    }

    .icons {
      display: flex;
    }
  }
`;

export default Footer;
