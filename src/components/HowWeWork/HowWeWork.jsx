import React from "react";
import styled from "styled-components";
import { device, StyledSectionHeader } from "../../GlobalStyles";
import Container from "../Container";

const StyledParagraph = styled.p`
  font-family: "Roboto";
  text-align: justify;
  line-height: 140%;
  margin-bottom: 12px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const Point = styled.h4`
  font-family: "Roboto";
  font-size: 24px;
  margin: 24px 0;
  @media ${device.desktop} {
    font-size: 36px;
  }
`;

export const HowWeWork = () => {
  return (
    <Container>
      <StyledSectionHeader id="3">Jak działamy?</StyledSectionHeader>
      <StyledParagraph>
        Poniżej przedstawiamy krótki schemat, jak po kolei wyglądać będzie nasza
        współpraca, by móc cieszyć się z wymarzonych mebli na wymiar.
      </StyledParagraph>
      <Point>1. Kontakt</Point>
      <StyledParagraph>
        Wystarczy skontaktować się z nami używając podanego poniżej numeru
        telefonu lub adresu email. Pracujemy od poniedziałku do piątku w
        godzinach 09:00 - 18:00.
      </StyledParagraph>
      <Point>2. Pomiar i Wycena</Point>
      <StyledParagraph>
        Pierwsze spotkanie zaczynamy od określenia Państwa potrzeb i oczekiwań.
        Wspólnie zastanowimy się nad funkcjonalnością mebli, kolorystyką i
        stylem oraz otoczeniem, w którym będą się znajdowały. Na pierwszym
        spotkaniu pokażemy Państwu dostępne materiały, systemy, elementy
        wyposażenia i próbki kolorów. Przedstawimy zalety i wady każdego
        rozwiązania.{" "}
      </StyledParagraph>
      <Point>3. Montaż</Point>
      <StyledParagraph>
        Ustalimy dogodną dla Państwa datę montażu mebli. Dokładamy wszelkich
        starań aby wszystkie prace w Państwa wnętrzu przebiegły w błyskawicznym
        tempie. Transport oraz montaż mebli zawarte są w cenie.
      </StyledParagraph>
    </Container>
  );
};
