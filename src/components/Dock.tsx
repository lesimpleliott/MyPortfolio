import styled from "styled-components";
import dataApp from "../assets/datas/myApps.json";

const Dock = () => {
  return (
    <DockStyled>
      {dataApp.map((app, index) => (
        <li className="app" key={index}>
          <span className="appName">{app.name}</span>
          <img className="icon" src={app.icon} />
        </li>
      ))}
    </DockStyled>
  );
};

// STYLED-COMPONENTS
const size = 60;
const sizeHover = 80;

const DockStyled = styled.ul`
  margin-block-start: 50px;
  margin-block-end: 75px;
  padding: 4px 6px;
  border-radius: 16px;
  border: solid 1px rgb(148, 148, 148);
  background: linear-gradient(rgba(79, 79, 79, 0.2), rgba(229, 229, 229, 0.4));
  display: flex;
  align-items: end;
  list-style: none;
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    padding: 15px;
  }

  .app {
    max-width: 75px;
    position: relative;
    display: flex;
    justify-content: center;
    transition: all 150ms ease-out;
    // Gestion des tailles des apps
    @media screen and (min-width: 1024px) {
      width: ${size}px;
      height: ${size}px;
      &:hover {
        width: ${sizeHover}px;
        height: ${sizeHover}px;
        margin-top: -${sizeHover - size}px;
      }

      // App AVANT et APRÈS app survolée
      &:has(+ .app:hover),
      &:hover + .app {
        width: ${size + ((sizeHover - size) / 3) * 2}px;
        height: ${size + ((sizeHover - size) / 3) * 2}px;
        margin-top: -${((sizeHover - size) / 3) * 2}px;
      }

      // app AVANT/AVANT et APRÈS/APRÈS app survolée
      &:has(+ .app + .app:hover),
      &:hover + .app + .app {
        width: ${size + (sizeHover - size) / 3}px;
        height: ${size + (sizeHover - size) / 3}px;
        margin-top: -${(sizeHover - size) / 3}px;
      }
    }

    .icon {
      width: 100%;
      height: 100%;
    }

    .appName {
      padding: 5px 10px;
      position: absolute;
      top: -33px;
      text-align: center;
      white-space: nowrap;
      color: #ffffff;
      background: #000000;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 150ms ease-out;
    }
    &:hover .appName {
      opacity: 0.8;
    }
  }
`;

export default Dock;
