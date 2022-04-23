import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/realizacje/20.png";
import { device } from "../../GlobalStyles";

const HeroContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 150, 0.4),
      rgba(255, 0, 150, 0.4)
    ),
    url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 48px;
    text-align: center;
    color: white;
    font-weight: 900;
    margin-bottom: 16px;
    @media ${device.tablet} {
      font-size: 72px;
    }
    @media ${device.desktop} {
      font-size: 72px;
    }
  }
  h2 {
    color: white;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    width: 90%;
    @media ${device.tablet} {
      width: 80%;
      font-size: 36px;
    }
    @media ${device.desktop} {
      width: 50%;
      font-size: 36px;
    }
  }
`;

export const HeroBanner = () => {
  return (
    <HeroContainer id="0">
      <HeroContent>
        <h1>Meble na wymiar</h1>
        <h2>
          Meble&nbsp;kuchenne - Szafy&nbsp;przesuwne - Garderoby -
          Meble&nbsp;do&nbsp;salonu - Meble&nbsp;do&nbsp;łazienki -
          Meble&nbsp;na&nbsp;zamówienie
        </h2>
      </HeroContent>
    </HeroContainer>
  );
};
