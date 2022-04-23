import React from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles";
import Logo from "../Logo";
import { CTAButton } from "../CTAButton";

const MobileNavWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 24px;
  @media ${device.tablet} {
    display: none;
  }
`;
const StyledLogo = styled.div`
  flex: 2;
`;
const MobileNav = () => {
  return (
    <MobileNavWrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <CTAButton />
    </MobileNavWrapper>
  );
};

export default MobileNav;
