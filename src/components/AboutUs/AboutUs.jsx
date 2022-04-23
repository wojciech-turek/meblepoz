import React from "react";
import styled from "styled-components";
import { device, StyledSectionHeader } from "../../GlobalStyles";
import Container from "../Container";
import mierzenie from "../../assets/mierzenie.jpeg";
import plyty from "../../assets/plyty.jpeg";
import zaklad from "../../assets/zaklad.jpeg";

const StyledParagraph = styled.p`
  font-family: "Roboto";
  text-align: justify;
  line-height: 140%;
  margin-bottom: 12px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  font-size: 18px;
  margin: 24px 0;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ParagraphImage = styled.img`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  margin: 16px;
  width: 100%;
  @media ${device.tablet} {
    max-width: 460px;
    margin: 16px 32px;
  }
`;

export const AboutUs = () => {
  return (
    <Container>
      <StyledSectionHeader id="1">O nas</StyledSectionHeader>
      <ParagraphWrapper>
        <ParagraphImage src={mierzenie} alt="" />
        <StyledParagraph>
          Od wstępnego pomiaru i wyceny, po realizację i montaż. Od wielu lat
          zajmujemy się dostarczaniem gotowych rozwiązań w naszej specjalizacji
          - meblach na wymiar. Są to między innymi: kuchnie na wymiar, szafy na
          wymiar, łazienki na wymiar, garderoby na wymiar, oraz wiele innych.
          Wykorzystujemy szeroką gamę najwyższej jakości materiałów dostępnych
          na rynku, tj. fronty lakierowane, akrylowe, fornirowane, fronty ze
          spieków kwarcowych, szklane, płyty laminowane, płyty stolarskie, i
          inne.
        </StyledParagraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <StyledParagraph>
          W swoim portfolio mamy także meble premium, wykonane z ekskluzywnych
          materiałów najwyższej jakości, jak spieki kwarcowe, forniry, naturalną
          skórę czy mosiądz. Lubimy tworzyć nowe rzeczy, gdyż to pcha nas do
          przodu w samorozwoju. Zdobywamy nowe umiejętności, aby później
          wykorzystać je dla Państwa.
        </StyledParagraph>
        <ParagraphImage src={plyty} alt="" />
      </ParagraphWrapper>
      <ParagraphWrapper>
        <ParagraphImage src={zaklad} alt="" />
        <StyledParagraph>
          Pomożemy Państwu uzyskać wymarzony wygląd wnętrz, jednocześnie dbając
          o ich praktyczność i funkcjonalność. Jeśli nie chcą Państwo niczego
          pozostawić przypadkowi, zapraszamy do skorzystania z usług naszej
          firmy. Zajmujemy się całym procesem: od pomiaru i wyceny, poprzez
          produkcję mebli, aż po montaż. Państwa zadowolenie jest dla nas na
          pierwszym miejscu.
        </StyledParagraph>
      </ParagraphWrapper>
    </Container>
  );
};
