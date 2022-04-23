import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NavigationBar = styled.div`
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  position: sticky;
  top: 0px;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const Navigation = () => {
  return (
    <NavigationBar>
      <DesktopNav />
      <MobileNav />
    </NavigationBar>
  );
};
