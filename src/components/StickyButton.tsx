import styled from "styled-components";
import useStoreTheme from "../theme.store";

type StickyBtnProps = {
  function?: () => void;
  link?: string;
  iconDark: string;
  iconLight: string;
  alt: string;
  active?: boolean;
};
// RENDRE LINK OU FUNCTION Obligatoire ... Typescript

const StickyButton: React.FC<StickyBtnProps> = (props) => {
  const { theme } = useStoreTheme();

  const anim = () => {
    const btns = document.querySelectorAll(".btn");

    btns.forEach((btn) => {
      btn.addEventListener("mouseover", (e) => {
        const mouseEvent = e as MouseEvent;
        (btn as HTMLElement).style.transform = `translate(${
          mouseEvent.offsetX - 20
        }px, ${mouseEvent.offsetY - 13}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        (btn as HTMLElement).style.transform = `translate(0px, 0px)`;
      });
    });
  };

  return (
    <StickyButtonStyled>
      {/* Logique si props.function est défini */}
      {props.function && (
        <button
          onMouseOver={anim}
          className={props.active ? "btn active" : "btn"}
          onClick={props.function}
        >
          <img
            src={theme === "dark" ? props.iconDark : props.iconLight}
            alt={props.alt}
          />
        </button>
      )}
      {/* Logique si props.link est défini */}
      {props.link && (
        <a
          onMouseOver={anim}
          className={props.active ? "btn active" : "btn"}
          href={props.link}
          target="_blank"
        >
          <img
            src={theme === "dark" ? props.iconDark : props.iconLight}
            alt={props.alt}
          />
        </a>
      )}
    </StickyButtonStyled>
  );
};

const StickyButtonStyled = styled.div`
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    all: unset;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1000ms ease-out;

    &.active {
      border: solid 1px var(--mainColor);
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export default StickyButton;
