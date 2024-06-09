import styled from "styled-components";
import useStoreNavbar from "../../navbar.store";

const BurgerBtn = () => {
  const { responsiveMode } = useStoreNavbar();
  const { menuIsOpen, setMenuIsOpen } = useStoreNavbar();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <BurgerBtnStyled
      id="burgerBtn"
      className={`${responsiveMode} ${menuIsOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </BurgerBtnStyled>
  );
};

const BurgerBtnStyled = styled.button`
  &.desktop {
    display: none;
  }

  &.mobile {
    height: 35px;
    width: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--text);
      border-radius: 10px;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
      transition: transform 200ms ease-in-out, width 200ms ease-in-out;
    }
    &.open {
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(2) {
        width: 0;
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
    &:hover span::after {
      width: 100%;
    }
  }
`;

export default BurgerBtn;
