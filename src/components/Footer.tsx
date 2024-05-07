import styled from "styled-components";
import useStoreTheme from "../theme.store";
import Logo from "./Logo";
import StickyButton from "./StickyButton";

const Footer = () => {
  const { theme, setTheme } = useStoreTheme();

  const setSystemTheme = () => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
    // Ajouter class "activeTheme" à l'option choisie
  };

  const setDarkTheme = () => {
    setTheme("dark");
    // Ajouter class "activeTheme" à l'option choisie
  };

  const setLightTheme = () => {
    setTheme("light");
    // Ajouter class "activeTheme" à l'option choisie
  };

  return (
    <FooterStyled>
      <div className="footerContainer">
        <section className="socials">
          <Logo height={30} />
          <div className="icons">
            <StickyButton
              link="mailto:lesimpleliott@gmail.com"
              theme={theme}
              icon="./icons/mail_white.webp"
              iconLight="./icons/mail_black.webp"
              alt="mail icon"
            />
            <StickyButton
              link="tel: +33663991329"
              theme={theme}
              icon="./icons/telephone_white.webp"
              iconLight="./icons/telephone_black.webp"
              alt="mail icon"
            />
            <StickyButton
              link="https://github.com/lesimpleliott"
              theme={theme}
              icon="./icons/github_white.webp"
              iconLight="./icons/github_black.webp"
              alt="github icon"
            />
            <StickyButton
              link="mailto:https://www.linkedin.com/in/lesimpleliott/"
              theme={theme}
              icon="./icons/linkedin_white.webp"
              iconLight="./icons/linkedin_black.webp"
              alt="linkedin icon"
            />
          </div>
        </section>

        <section className="credits">
          <ul className="cred">
            <li>
              Made by <strong>Eliott Lesimple</strong> with{" "}
              <strong>Love</strong> and <strong>lots of coffee</strong>
            </li>
            <li>© 2024 - Tous droits réservés</li>
          </ul>
          <div className="icons">
            <StickyButton
              function={setSystemTheme}
              icon="./icons/system_white.webp"
              iconLight="./icons/system_black.webp"
              theme={theme}
              alt="system theme"
            />
            <StickyButton
              function={setDarkTheme}
              icon="./icons/dark_white.webp"
              iconLight="./icons/dark_black.webp"
              theme={theme}
              alt="system theme"
            />
            <StickyButton
              function={setLightTheme}
              icon="./icons/light_white.webp"
              iconLight="./icons/light_black.webp"
              theme={theme}
              alt="system theme"
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
    }

    .socials {
      border-bottom: solid 1px grey;
    }

    .icons {
      display: flex;
    }
  }

  /* .activeTheme {
    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: var(--mainColor);
    }
  } */
`;

export default Footer;
