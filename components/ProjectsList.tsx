import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {} from "react-bootstrap";
import ProjectItem from "./ProjectItem";
import api from "../services/api";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes inAnimation {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes outAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const mountedStyle = { animation: "inAnimation 500ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 500ms ease-out",
  animationFillMode: "forwards",
};

export default function ProjectsList(show: any) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("/projetos")
      .then(({ data }) => {
        setProjects(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [projects]);

  return (
    <StyledContainer style={show ? mountedStyle : unmountedStyle}>
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
    </StyledContainer>
  );
}
