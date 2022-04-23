import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1920px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */

  h1,h2,h3,h4,h5,h6{
    font-family: 'Lato';
  }

`;

export const StyledSectionHeader = styled.h3`
  text-align: center;
  font-size: 36px;
  font-family: "Lato";
  font-weight: 700;
  margin: 12px auto;
  text-transform: uppercase;
  @media ${device.desktop} {
    margin: 48px auto;
  }
`;

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CarouselItem = styled.div`
  height: 80vh;
  width: 100%;
`;

export const CarouselImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default GlobalStyle;
