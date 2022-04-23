import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { device } from "../../GlobalStyles";

import image1 from "../../assets/realizacje/1.jpg";
import image2 from "../../assets/realizacje/2.png";
import image3 from "../../assets/realizacje/3.jpg";
import image4 from "../../assets/realizacje/4.jpg";
import image5 from "../../assets/realizacje/5.jpg";
import image6 from "../../assets/realizacje/6.png";
import image7 from "../../assets/realizacje/7.jpg";
import image8 from "../../assets/realizacje/8.jpg";
import image9 from "../../assets/realizacje/9.png";
import image10 from "../../assets/realizacje/10.jpg";
import image11 from "../../assets/realizacje/11.jpg";
import image13 from "../../assets/realizacje/13.png";
import image14 from "../../assets/realizacje/14.png";
import image15 from "../../assets/realizacje/15.png";
import image16 from "../../assets/realizacje/16.png";
import image17 from "../../assets/realizacje/17.png";
import image18 from "../../assets/realizacje/18.png";
import image19 from "../../assets/realizacje/19.png";
import image20 from "../../assets/realizacje/20.png";
import image21 from "../../assets/realizacje/21.png";
import image22 from "../../assets/realizacje/22.png";
import image23 from "../../assets/realizacje/23.png";
import image24 from "../../assets/realizacje/24.jpg";
import image26 from "../../assets/realizacje/26.jpg";
import image27 from "../../assets/realizacje/27.jpg";
import image28 from "../../assets/realizacje/28.jpg";
import image29 from "../../assets/realizacje/29.jpg";
import image30 from "../../assets/realizacje/30.jpg";
import image31 from "../../assets/realizacje/31.jpg";
import image32 from "../../assets/realizacje/32.jpg";
import image33 from "../../assets/realizacje/33.jpg";
import image34 from "../../assets/realizacje/34.jpg";
import image35 from "../../assets/realizacje/35.jpg";
import image36 from "../../assets/realizacje/36.jpg";
import image37 from "../../assets/realizacje/37.jpg";
import image38 from "../../assets/realizacje/38.jpg";
import image39 from "../../assets/realizacje/39.jpg";
import image40 from "../../assets/realizacje/40.jpg";
import image41 from "../../assets/realizacje/41.jpg";
import image42 from "../../assets/realizacje/42.jpg";
import image43 from "../../assets/realizacje/43.jpg";
import image44 from "../../assets/realizacje/44.jpg";
import image45 from "../../assets/realizacje/45.jpg";
import image46 from "../../assets/realizacje/46.jpg";
import image47 from "../../assets/realizacje/47.jpg";
import image48 from "../../assets/realizacje/48.jpg";
import image49 from "../../assets/realizacje/49.jpg";
import image50 from "../../assets/realizacje/50.jpg";

import nextArrow from "../../assets/next.svg";

import {
  CarouselImage,
  CarouselItem,
  StyledSectionHeader,
} from "../../GlobalStyles";
import styled from "styled-components";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
];

const CarouselWrapper = styled.div`
  margin: 48px 0 72px 0;
`;

const StyledArrow = styled.button`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  img {
    height: 26px;
  }
  @media ${device.desktop} {
    img {
      height: 48px;
    }
  }
`;

const StyledPrevArrow = styled.button`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
  user-select: none;
  img {
    height: 26px;
  }
  @media ${device.desktop} {
    img {
      height: 48px;
    }
  }
`;

const NextArrow = ({ onClick }) => {
  return (
    <StyledArrow onClick={onClick}>
      <img src={nextArrow} alt="Next" />
    </StyledArrow>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <StyledPrevArrow onClick={onClick}>
      <img src={nextArrow} alt="Prev" />
    </StyledPrevArrow>
  );
};

export const Realizations2 = () => {
  return (
    <CarouselWrapper>
      <StyledSectionHeader id="2">Zrealizowane Projekty</StyledSectionHeader>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        paging={true}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        lazyLoad={true}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        slidesToScroll={3}
        slidesToShow={3}
      >
        {images.map((image) => (
          <CarouselItem>
            <CarouselImage src={image} alt="" />
          </CarouselItem>
        ))}
      </InfiniteCarousel>
    </CarouselWrapper>
  );
};
