import React from "react";
import styled from "styled-components";
import { device } from "../GlobalStyles";

const StyledText = styled.div`
  font-size: 26px;
  font-weight: 700;
  font-family: "Lato";
  @media ${device.tablet} {
    font-size: 40px;
  }
`;
export const Logo = () => {
  return <StyledText>MeblePoz</StyledText>;
};

export default Logo;
