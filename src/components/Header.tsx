import styled from "styled-components";

const Header = () => {
  const toggleTheme = () => {
    const theme = document.body.getAttribute("data-theme");
    const toggleThemeBtn = document.getElementById("toggleThemeBtn");
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "light");
      toggleThemeBtn.textContent = "Dark Mode";
    } else {
      document.body.setAttribute("data-theme", "dark");
      toggleThemeBtn.textContent = "Light Mode";
    }
  };

  return (
    <HeaderStyled>
      <button onClick={toggleTheme} id="toggleThemeBtn">
        Toggle Theme
      </button>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default Header;
