import React from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles";
import { Link } from "react-scroll";

const navigationItems = [
  "Start",
  "O Nas",
  "Zrealizowane projekty",
  "Jak działamy?",
  "Meble premium",
  "Kontakt",
];

const List = styled.ul`
  display: flex;
  padding-right: 36px;
  flex-direction: column;
  font-family: "Lato";

  @media ${device.tablet} {
    flex-direction: row;
    gap: 24px;
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 22px;
  }
`;
const ListItem = styled.li`
  &:hover {
    color: burlywood;
    cursor: pointer;
  }
`;

export const NavigationItems = () => {
  return (
    <List>
      {navigationItems.map((item, index) => (
        <ListItem>
          <Link offset={-70} to={`${index}`} smooth={true} duration={500}>
            {item}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
