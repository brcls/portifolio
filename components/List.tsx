import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const StyledContainer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 93%;
  margin: 1rem auto;
  background: rgba(5, 5, 5, 0.6);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  color: #f3f3f3;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const StyledTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
`;

export default function List() {
  return (
    <StyledContainer>
      <StyledTitle>Lista de test</StyledTitle>
      <li>Teste</li>
      <li>Teste</li>
      <li>Teste</li>
    </StyledContainer>
  );
}
