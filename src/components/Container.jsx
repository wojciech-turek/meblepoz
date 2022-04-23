import React from "react";
import styled from "styled-components";
import { device } from "../GlobalStyles";

const Wraper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 36px;

  @media ${device.desktop} {
    max-width: 1280px;
  }
`;

export default function Container({ children }) {
  return <Wraper>{children}</Wraper>;
}
