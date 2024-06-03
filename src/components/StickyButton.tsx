import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import useStoreTheme from "../theme.store";

// TypeScript
type BaseBtnProps = {
  alt: string;
  active?: boolean;
  sticky?: boolean;
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
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn || props.sticky === false) return; // Ne pas ajouter les écouteurs si sticky est false

    const handleMouseOver = (e: MouseEvent) => {
      btn.style.transform = `translate(${e.offsetX - 20}px, ${
        e.offsetY - 13
      }px)`;
    };

    const handleMouseLeave = () => {
      btn.style.transform = `translate(0px, 0px)`;
    };

    btn.addEventListener("mouseover", handleMouseOver as EventListener);
    btn.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      btn.removeEventListener("mouseover", handleMouseOver as EventListener);
      btn.removeEventListener("mouseleave", handleMouseLeave as EventListener);
    };
  }, [btnRef, props.sticky]);

  const commonContent = (
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
  );

  //JSX
  return (
    <StickyButtonStyled className="stickyBtn">
      {props.function ? (
        <button
          ref={btnRef as React.RefObject<HTMLButtonElement>}
          className={props.active ? "btn active" : "btn"}
          onClick={props.function}
        >
          {commonContent}
        </button>
      ) : (
        <a
          ref={btnRef as React.RefObject<HTMLAnchorElement>}
          className={props.active ? "btn active" : "btn"}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {commonContent}
        </a>
      )}
    </StickyButtonStyled>
  );
};

// STYLED-COMPONENTS
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
