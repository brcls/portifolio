import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const StyledHeader = styled(Navbar)`
  background: rgba(5, 5, 5, 0.4);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  justify-content: center;
  display: flex;
  width: 45%;
  height: 55px;
  margin: 0 auto;
  border-radius: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  top: 50px;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

const StyledSubTitle = styled.h1`
  color: #f3f3f3;
  margin: 0.5rem;
  font-size: 1.25rem;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  transition: 0.5s;

  &:hover {
    transition: 0.6s;
    transform: scale(1.05);
    color: #696969;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// Componente responsável por renderizar o cabeçalho da aplicação
export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <StyledLink href="/">
              <StyledSubTitle>Home</StyledSubTitle>
            </StyledLink>
            <StyledLink href="/contato">
              <StyledSubTitle>Contato</StyledSubTitle>
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </StyledHeader>
  );
}
