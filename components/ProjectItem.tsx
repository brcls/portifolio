import React from "react";
import styled from "styled-components";
import { Card, Badge } from "react-bootstrap";
import github from "../assets/github.png";
import Image from "next/image";

const StyledCard = styled(Card)`
  background: rgba(5, 5, 5, 0.4);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  display: flex;
  flex-direction: row;
  width: 93%;
  margin: 0 auto 30px;
  color: #f3f3f3;
  border: none;
  border-radius: 25px;
  transition: 0.5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.6s;
    transform: scale(1.02);

    img {
      transform: translateY(-20px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  overflow: hidden;
`;

const StyledTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 4.5rem;
`;

const StyledImage = styled(Image)`
  width: 70%;
  height: 0%;
  position: relative;
  top: 100px;
  object-fit: contain;
  border-radius: 25px;
  transition: 0.5s;

  @media (max-width: 768px) {
    width: 100%;
    top: 20px;
  }
`;

const StyledBody = styled(Card.Body)`
  margin: 0 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
`;

const StyledBadgeGroup = styled.div`
  margin: 0.5rem 0;
`;

export default function ProjectsItem() {
  return (
    <StyledCard>
      <StyledBody>
        <StyledTitle>Projeto</StyledTitle>
        <StyledBadgeGroup>
          <Badge pill variant="primary">
            React
          </Badge>{" "}
          <Badge pill variant="primary">
            Next.js
          </Badge>{" "}
          <Badge pill variant="primary">
            TypeScript
          </Badge>{" "}
        </StyledBadgeGroup>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl ut ultricies lacinia, nunc nisl ultricies nunc, nec
        </Card.Text>
      </StyledBody>
      <StyledImage src={github} alt="github" />
    </StyledCard>
  );
}
