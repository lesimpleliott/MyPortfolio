import styled from "styled-components";

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
      <button onClick={toggleTheme} id="toggleThemeBtn">
        Toggle Theme
      </button>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: var(--headerBackground);
  transition: background-color 300ms ease-in-out;
`;

export default Header;
