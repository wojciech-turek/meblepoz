import React from "react";
import styled from "styled-components";
import { StyledSectionHeader } from "../../GlobalStyles";

const FooterContainer = styled.footer`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 48px 0;
`;

const ContactLink = styled.a`
  text-decoration: underline;
  color: rgba(0, 0, 0, 1);
  font-size: 24px;
  cursor: pointer;
`;

const ContactDetails = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding-bottom: 48px;
`;

const ContactText = styled.div`
  font-size: 26px;
`;
export const Contact = () => {
  return (
    <FooterContainer>
      <StyledSectionHeader id="5">Kontakt</StyledSectionHeader>
      <ContactDetails>
        <ContactText>
          Zapraszamy do kontaktu telefonicznego lub mailowego!
        </ContactText>
        <div>
          <ContactLink href="tel:123-456-7890">
            Telefon: 602 119 798
          </ContactLink>
        </div>
        <div>
          <ContactLink href="mailto:biuro@meblepoz.com">
            Email: biuro@meblepoz.com
          </ContactLink>
        </div>
      </ContactDetails>
    </FooterContainer>
  );
};
