import React from "react";
import {
  CarouselImage,
  CarouselItem,
  StyledSectionHeader,
} from "../../GlobalStyles";

import image1 from "../../assets/premium/1.jpg";
import image01 from "../../assets/premium/01.jpg";
import image2 from "../../assets/premium/2.png";
import image02 from "../../assets/premium/02.png";
import image3 from "../../assets/premium/3.png";
import image03 from "../../assets/premium/03.jpg";
import image4 from "../../assets/premium/4.webp";
import image04 from "../../assets/premium/04.png";
import image5 from "../../assets/premium/5.png";
import image05 from "../../assets/premium/05.jpg";
import image6 from "../../assets/premium/6.jpg";
import image06 from "../../assets/premium/06.png";
import image7 from "../../assets/premium/7.jpg";
import image07 from "../../assets/premium/07.jpg";
import image8 from "../../assets/premium/8.jpg";
import image9 from "../../assets/premium/9.jpg";
import image10 from "../../assets/premium/10.jpg";
import image11 from "../../assets/premium/11.jpg";
import image13 from "../../assets/premium/13.jpg";
import image14 from "../../assets/premium/14.jpg";
import image15 from "../../assets/premium/15.jpg";
import image16 from "../../assets/premium/16.jpg";
import image17 from "../../assets/premium/17.jpg";
import image18 from "../../assets/premium/18.jpg";
import image19 from "../../assets/premium/19.jpg";
import image20 from "../../assets/premium/20.jpg";
import image21 from "../../assets/premium/21.jpg";
import image22 from "../../assets/premium/22.jpg";
import image23 from "../../assets/premium/23.jpg";
import InfiniteCarousel from "react-leaf-carousel";
import styled from "styled-components";
import { NextArrow, PrevArrow } from "../Realizationsv2/Realizations";

const CarouselWrapper = styled.div`
  margin: 48px 0 72px 0;
`;
const images = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
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
];

export const Premium = () => {
  return (
    <CarouselWrapper>
      <StyledSectionHeader id="4">Meble Premium</StyledSectionHeader>
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
