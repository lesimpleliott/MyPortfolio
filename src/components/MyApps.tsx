import styled from "styled-components";

type AppDockTypes = {
  data: {
    name: string;
    icon: string;
  };
};

const MyApps = ({ data }: AppDockTypes) => {
  return (
    <AppList className="app">
      <span className="appName">{data.name}</span>
      <img className="icon" src={data.icon} />
    </AppList>
  );
};

// STYLED-COMPONENTS
const size = 55;
const sizeHover = 90;

const AppList = styled.li`
  width: ${size}px;
  height: ${size}px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 150ms ease-out;
  @media screen and (min-width: 1024px) {
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
  }
  &:hover .appName {
    opacity: 0.8;
  }
`;

export default MyApps;
