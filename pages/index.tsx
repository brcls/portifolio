import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import ProjectsList from "../components/ProjectsList";
import MyLists from "../components/MyLists";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import Image from "next/image";
import desenho from "../assets/desenho.svg";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  max-width: 93%;
  height: 55px;
`;

const StyledToggle = styled(ToggleButton)`
  font-family: "Montserrat", sans-serif;
  font-weight: lighter;
  font-size: 1.25rem;
  border-radius: 500px;
  padding: 0.8rem;
`;

const StyledTitle = styled.h1`
  color: #f3f3f3;
  text-align: center;
  width: 95%;
  margin: 0px auto;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 8.5vw;
`;

const StyledImage = styled(Image)`
  display: block;
  margin: 100px auto 10px;
  width: 330px;
  height: 330px;
`;

const StyleCircle = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  top: -150px;
  left: -150px;
  background-color: #ff0048;
  animation: colorChange 3s infinite alternate;
  @keyframes colorChange {
    0% {
      background-color: #8000ff;
    }
    100% {
      background-color: #00ff66;
    }
  }
  position: absolute;
  filter: blur(250px);
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
  filter: blur(200px);
  z-index: -1;
`;

const StyleCircle3 = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  top: 1600px;
  left: -200px;
  animation: colorChange2 3s infinite alternate;

  background-color: #00ffee;
  @keyframes colorChange2 {
    0% {
      background-color: #fd2d2d;
    }
    100% {
      background-color: #1900ff;
    }
  }
  position: absolute;
  overflow: hidden;
  filter: blur(350px);
  z-index: -1;
`;

export default function Home() {
  const [show, setShow] = useState(1);

  function MostrarListas(props: any) {
    if (props.show) {
      return <ProjectsList />;
    } else {
      return <MyLists />;
    }
  }

  return (
    <div>
      <Header />
      <StyleCircle />
      <StyleCircle2 />
      <StyleCircle3 />
      <StyledImage src={desenho} alt="desenho" />
      <StyledTitle>Oi! Sou o Erick, Full Stack Software Engineer</StyledTitle>
      <StyledToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <StyledToggle
          id="tbg-radio-1"
          value={1}
          variant="outline-light"
          onChange={() => {
            setShow(1);
          }}
        >
          Meus projetos
        </StyledToggle>
        <StyledToggle
          id="tbg-radio-2"
          value={0}
          variant="outline-light"
          onChange={() => {
            setShow(0);
          }}
        >
          Minhas listas
        </StyledToggle>
      </StyledToggleButtonGroup>

      <MostrarListas show={show} />
    </div>
  );
}
