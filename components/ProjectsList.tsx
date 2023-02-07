import React from "react";
import styled from "styled-components";
import {} from "react-bootstrap";
import ProjectItem from "./ProjectItem";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function ProjectsList() {
  return (
    <StyledContainer>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </StyledContainer>
  );
}
