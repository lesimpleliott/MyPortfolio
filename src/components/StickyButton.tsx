import styled from "styled-components";
import useStoreTheme from "../theme.store";

// TypeScript
type BaseBtnProps = {
  alt: string;
  active?: boolean;
};

type IconsProps =
  | {
      icon: string;
      iconDark?: never;
      iconLight?: never;
    }
  | {
      icon?: never;
      iconDark: string;
      iconLight: string;
    };

type FunctionProps =
  | {
      function: () => void;
      link?: never;
    }
  | {
      function?: never;
      link: string;
    };

type StickyBtnProps = BaseBtnProps & IconsProps & FunctionProps;

// FONCTIONS
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
    <StickyButtonStyled className="stickyBtn">
      {/* Logique si props.function est défini */}
      {props.function && (
        <button
          onMouseOver={anim}
          className={props.active ? "btn active" : "btn"}
          onClick={props.function}
        >
          <img
            src={
              props.icon
                ? props.icon
                : theme === "dark"
                ? props.iconDark
                : props.iconLight
            }
            alt={props.alt}
            className="stickyIcon"
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
            src={
              props.icon
                ? props.icon
                : theme === "dark"
                ? props.iconDark
                : props.iconLight
            }
            alt={props.alt}
            className="stickyIcon"
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

    .stickyIcon {
      width: 25px;
      height: 25px;
    }
  }
`;

export default StickyButton;
