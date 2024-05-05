import styled from "styled-components";

type StickyBtnProps = {
  function?: () => void;
  link?: string;
  theme: string;
  icon: string;
  iconLight: string;
  alt: string;
};
// RENDRE LINK OU FUNCTION Obligatoire ... Typescript

const StickyButton: React.FC<StickyBtnProps> = (props) => {
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
        <button onMouseOver={anim} className="btn" onClick={props.function}>
          <img
            src={props.theme === "dark" ? props.icon : props.iconLight}
            alt={props.alt}
          />
        </button>
      )}
      {/* Logique si props.link est défini */}
      {props.link && (
        <a onMouseOver={anim} className="btn" href={props.link} target="_blank">
          <img
            src={props.theme === "dark" ? props.icon : props.iconLight}
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

  .btn {
    all: unset;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 1000ms ease-out;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export default StickyButton;
