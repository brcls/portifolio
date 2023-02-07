import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const StyledCard = styled(Card)`
  background: rgba(5, 5, 5, 0.6);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  width: 93%;
  margin: 10px auto;
  text-align: center;
  color: #f3f3f3;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    background-color: #0f0f0f;
    transition: 0.6s;
    transform: scale(1.05);
  }
`;

const StyledTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
`;

export default function ProjectsItem() {
  return (
    <StyledCard>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <StyledTitle>Projeto</StyledTitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}
