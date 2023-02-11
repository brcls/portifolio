import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Badge } from "react-bootstrap";
import Image from "next/image";
import api from "../services/api";

const StyledCard = styled(Card)`
  background: rgba(5, 5, 5, 0.4);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  display: flex;
  flex-direction: row;
  width: 90vw;
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

const StyledBadge = styled(Badge)`
  margin: 0 0.2rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

export default function ProjectItem({ project }: any) {
  const loaderProp = ({ src }: any) => {
    return src;
  };

  return (
    <StyledLink href={project.link} target="_blank" rel="noreferrer">
      <StyledCard>
        <StyledBody>
          <StyledTitle>{project.titulo}</StyledTitle>
          <StyledBadgeGroup>
            {project.stack.map((item: any) => (
              <StyledBadge pill variant="primary">
                {item}
              </StyledBadge>
            ))}
          </StyledBadgeGroup>
          <Card.Text>{project.descricao}</Card.Text>
        </StyledBody>
        <StyledImage
          src={`http://localhost:3000/${project.src}`}
          alt={project.titulo}
          width={0}
          height={0}
          loader={loaderProp}
        />
      </StyledCard>
    </StyledLink>
  );
}
