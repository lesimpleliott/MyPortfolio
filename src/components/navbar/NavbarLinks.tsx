import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import useStoreNavbar from "../../navbar.store";

const NavbarLinks = () => {
  const { responsiveMode, menuIsOpen, setMenuIsOpen } = useStoreNavbar();
  const [, setActiveBox] = useState<HTMLElement | null>(null);
  const location = useLocation();
  const underline = document.querySelector(".underline");

  const setUnderlinePosition = useCallback(
    (box: HTMLElement) => {
      if (box && underline) {
        const boxWidth = box.offsetWidth;
        const boxLeft = box.offsetLeft;

        (underline as HTMLElement).style.width = `${boxWidth}px`;
        (underline as HTMLElement).style.left = `${boxLeft}px`;
      }
    },
    [underline]
  );

  useEffect(() => {
    const boxes = document.querySelectorAll(".link");
    const currentPath = location.pathname;

    const activeBox = Array.from(boxes).find(
      (box) => (box as HTMLAnchorElement).getAttribute("href") === currentPath
    ) as HTMLElement;

    if (activeBox) {
      setActiveBox(activeBox);
      setUnderlinePosition(activeBox);
    }

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        setUnderlinePosition(box as HTMLElement);
      });

      box.addEventListener("mouseleave", () => {
        if (activeBox) {
          setUnderlinePosition(activeBox);
        }
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      boxes.forEach((box) => {
        box.removeEventListener("mouseenter", () => {
          setUnderlinePosition(box as HTMLElement);
        });
        box.removeEventListener("mouseleave", () => {
          if (activeBox) {
            setUnderlinePosition(activeBox);
          }
        });
      });
    };
  }, [location.pathname, setUnderlinePosition]);

  const handleLinkClick = () => {
    setMenuIsOpen(false);
  };

  return (
    <NavbarLinksStyled
      className={`${responsiveMode} ${menuIsOpen ? "open" : ""}`}
    >
      <NavLink to="/" className="link" onClick={handleLinkClick}>
        Home
      </NavLink>
      <NavLink to="/about" className="link" onClick={handleLinkClick}>
        About
      </NavLink>
      <NavLink to="/contact" className="link" onClick={handleLinkClick}>
        Contact
      </NavLink>
      <span className="underline"></span>
    </NavbarLinksStyled>
  );
};

// STYLED-COMPONENTS
export const NavbarLinksStyled = styled.div`
  &.desktop {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    .link {
      height: 100%;
      padding: 0 16px;
      display: flex;
      align-items: center;
      font-weight: 500;
    }

    .underline {
      position: absolute;
      bottom: 16px;
      height: 3px;
      background: var(--mainColor);
      transition: left 300ms, width 300ms;
    }
  }

  &.mobile {
    width: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .link {
      opacity: 0;
      transition: opacity 0ms ease-in-out;
    }

    &.open {
      .link {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        opacity: 1;
        transition: background-color 250ms ease-in-out,
          opacity 250ms 50ms ease-in-out;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;

export default NavbarLinks;
