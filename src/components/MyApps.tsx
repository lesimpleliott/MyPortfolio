import styled from "styled-components";

const sizeIcon = 55;
const sizeHover = 90;

type AppDockTypes = {
  data: {
    name: string;
    icon: string;
  };
};

const MyApps = ({ data }: AppDockTypes) => {
  return (
    <AppList>
      <Name className="appName">{data.name}</Name>
      <Icon className="icon" src={data.icon} />
    </AppList>
  );
};

// STYLED-COMPONENTS
const AppList = styled.li`
  width: ${sizeIcon}px;
  height: ${sizeIcon}px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 250ms ease-out;

  @media screen and (min-width: 1024px) {
    &:hover {
      width: ${sizeHover}px;
      height: ${sizeHover}px;
      margin-top: -${sizeHover - sizeIcon}px;
    }

    // App AVANT et APRÈS app survolée
    &:has(+ .app:hover),
    &:hover + .app {
      width: ${sizeIcon + ((sizeHover - sizeIcon) / 3) * 2}px;
      height: ${sizeIcon + ((sizeHover - sizeIcon) / 3) * 2}px;
      margin-top: -${((sizeHover - sizeIcon) / 3) * 2}px;
    }

    // app AVANT/AVANT et APRÈS/APRÈS app survolée
    &:has(+ .app + .app:hover),
    &:hover + .app + .app {
      width: ${sizeIcon + (sizeHover - sizeIcon) / 3}px;
      height: ${sizeIcon + (sizeHover - sizeIcon) / 3}px;
      margin-top: -${(sizeHover - sizeIcon) / 3}px;
    }
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.span`
  padding: 5px 10px;
  position: absolute;
  top: -33px;
  text-align: center;
  white-space: nowrap;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  opacity: 0;

  ${AppList}:hover & {
    opacity: 1;
  }
`;

export default MyApps;
