import styled from "styled-components";
import useStoreTheme from "../../stores/theme.store";
import StickyButton from "../StickyButton";

const Settings = () => {
  const { sysTheme, theme, setTheme, setSysTheme } = useStoreTheme();

  const systemTheme = () => {
    setSysTheme(true);
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  };
  const darkTheme = () => {
    setTheme("dark");
    setSysTheme(false);
  };
  const lightTheme = () => {
    setTheme("light");
    setSysTheme(false);
  };

  return (
    <SettingsStyled>
      <StickyButton
        function={systemTheme}
        iconDark="./icons/system_white.svg"
        iconLight="./icons/system_black.svg"
        alt="system theme"
        active={sysTheme}
      />
      <StickyButton
        function={darkTheme}
        iconDark="./icons/dark_white.svg"
        iconLight="./icons/dark_black.svg"
        alt="dark theme"
        active={sysTheme === false && theme === "dark"}
      />
      <StickyButton
        function={lightTheme}
        iconDark="./icons/light_white.svg"
        iconLight="./icons/light_black.svg"
        alt="light theme"
        active={sysTheme === false && theme === "light"}
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
