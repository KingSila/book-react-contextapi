import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

import { Flex } from "./styles/Flex.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Nav>
            <Logo src="/images/logo.svg" alt="" />
            <h1>Book Tracking System</h1>
            <Image src="./images/graph.svg" alt="" />
            <p1>U read 2 Books this year from target of 10</p1>
          </Nav>
        </Flex>
      </Container>
    </StyledHeader>
  );
};
