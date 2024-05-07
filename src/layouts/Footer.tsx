import styled from "styled-components";
import Logo from "../components/Logo";
import StickyButton from "../components/StickyButton";
import useStoreTheme from "../theme.store";

const Footer = () => {
  const { theme, setTheme } = useStoreTheme();
  const getSysTheme = localStorage.getItem("sysTheme");

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
        <section className="socials">
          <Logo height={30} />
          <div className="icons">
            <StickyButton
              link="mailto:lesimpleliott@gmail.com"
              iconDark="./icons/mail_white.webp"
              iconLight="./icons/mail_black.webp"
              alt="mail icon"
            />
            <StickyButton
              link="tel: +33663991329"
              iconDark="./icons/telephone_white.webp"
              iconLight="./icons/telephone_black.webp"
              alt="mail icon"
            />
            <StickyButton
              link="https://github.com/lesimpleliott"
              iconDark="./icons/github_white.webp"
              iconLight="./icons/github_black.webp"
              alt="github icon"
            />
            <StickyButton
              link="mailto:https://www.linkedin.com/in/lesimpleliott/"
              iconDark="./icons/linkedin_white.webp"
              iconLight="./icons/linkedin_black.webp"
              alt="linkedin icon"
            />
          </div>
        </section>

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
              iconDark="./icons/system_white.webp"
              iconLight="./icons/system_black.webp"
              alt="system theme"
              active={getSysTheme === "true" ? true : false}
            />
            <StickyButton
              function={setDarkTheme}
              iconDark="./icons/dark_white.webp"
              iconLight="./icons/dark_black.webp"
              alt="dark theme"
              active={
                getSysTheme === "false" && theme === "dark" ? true : false
              }
            />
            <StickyButton
              function={setLightTheme}
              iconDark="./icons/light_white.webp"
              iconLight="./icons/light_black.webp"
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
    }

    .socials {
      border-bottom: solid 1px grey;
    }

    .icons {
      display: flex;
    }
  }
`;

export default Footer;
