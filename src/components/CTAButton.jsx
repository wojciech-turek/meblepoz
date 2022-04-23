import React from "react";
import styled from "styled-components";
import phoneIcon from "../assets/phone-call.png";
import { device } from "../GlobalStyles";

const StyledCTAButton = styled.a`
  padding: 6px 16px;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #414141;
  gap: 8px;
  margin-right: 8px;
  background-color: #5cdb5c;
  border: none;
  text-decoration: none;
  font-weight: 700;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const StyledIcon = styled.img`
  border-radius: 100%;
  background-color: white;
  padding: 4px;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const CTAButton = () => {
  return (
    <>
      <StyledCTAButton href="tel:602-119-798">
        <StyledIcon src={phoneIcon} alt="" />
        Zadzwoń: 602 119 798
      </StyledCTAButton>
    </>
  );
};
