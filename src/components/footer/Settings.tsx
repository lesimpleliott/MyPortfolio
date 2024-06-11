import styled from "styled-components";
import useStoreTheme from "../../stores/theme.store";
import StickyButton from "../StickyButton";

const Settings = () => {
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
    <SettingsStyled>
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
        active={getSysTheme === "false" && theme === "dark" ? true : false}
      />
      <StickyButton
        function={setLightTheme}
        iconDark="./icons/light_white.svg"
        iconLight="./icons/light_black.svg"
        alt="light theme"
        active={getSysTheme === "false" && theme === "light" ? true : false}
      />
    </SettingsStyled>
  );
};

const SettingsStyled = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export default Settings;
