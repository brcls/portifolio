import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Image from "next/image";

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledBody = styled.div`
  background-color: #1f1f1f;
  height: 100vh;
  padding: 100px 0 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  color: #f3f3f3;
  text-align: center;
  width: 80%;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 5rem;
`;

const StyleCircle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  top: -150px;
  left: -150px;
  background-color: #9e23b4;
  animation: colorChange 3s infinite alternate;
  @keyframes colorChange {
    0% {
      background-color: #8635d7;
    }
    100% {
      background-color: #b423a3;
    }
  }
  position: absolute;
  filter: blur(170px);
  z-index: -1;
`;
const StyleCircle2 = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  top: 600px;
  right: -250px;
  animation: colorChange1 3s infinite alternate;

  background-color: #ffe600;
  @keyframes colorChange1 {
    0% {
      background-color: #cc2f2f;
    }
    100% {
      background-color: #2bff00;
    }
  }
  position: absolute;
  overflow: hidden;
  filter: blur(170px);
  z-index: -1;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.p`
  color: #f3f3f3;
  text-align: center;
  width: 80%;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
`;

const StyledIcon = styled.h1`
  color: #f3f3f3;
  text-align: center;
  margin: 0px 10px;
  transition: 0.5s;

  &:hover {
    transition: 0.6s;
    transform: scale(1.15);
    color: #a0a0a0;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Contato() {
  return (
    <StyledBody>
      <Header />
      <StyleCircle />
      <StyleCircle2 />
      <StyledContainer>
        <StyledTitle>Contato</StyledTitle>
        <StyledText>+55 (91) 98421-1088</StyledText>
        <StyledText>
          Rua Episcopal, 2474. Apartamento 161B. São Carlos - SP
        </StyledText>
        <StyledRow>
          <StyledLink
            href="https://github.com/brcls/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon>
              <FaGithub />
            </StyledIcon>
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/brcls/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon>
              <FaLinkedin />
            </StyledIcon>
          </StyledLink>
          <StyledLink
            href="mailto:brcls0502@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon>
              <MdOutlineAlternateEmail />
            </StyledIcon>
          </StyledLink>
        </StyledRow>
      </StyledContainer>
    </StyledBody>
  );
}
