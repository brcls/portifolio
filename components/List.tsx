import React from "react";
import styled from "styled-components";

const StyledContainer = styled.ol`
  background: rgba(5, 5, 5, 0.4);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  color: #f3f3f3;
  border: none;
  border-radius: 25px;
  padding: 1rem;
  transition: 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.6s;
    transform: scale(1.02);
    font-size: 1.5rem;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 4.5rem;
`;

export default function List() {
  return (
    <StyledContainer>
      <StyledTitle>Filmes</StyledTitle>
      <li>La Haine</li>
      <li>Parasita</li>
      <li>Goodfather</li>
    </StyledContainer>
  );
}
