import React from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles";
import { CTAButton } from "../CTAButton";
import Logo from "../Logo";
import { NavigationItems } from "./NavigationItems";

const DesktopNavWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 36px;
    padding-right: 36px;
  }
`;

const StyledLogo = styled.div`
  flex: 2;
`;

const DesktopNav = () => {
  return (
    <DesktopNavWrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <NavigationItems />
      <CTAButton />
    </DesktopNavWrapper>
  );
};

export default DesktopNav;
