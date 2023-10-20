// ProjectsList.js
import React, { useState } from "react";
import styles from "./ProjectsList.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";

export default function ProjectsList({ show }) {
  const [projects, setProjects] = useState([]);

  return (
    <div
      className={`${styles.StyledContainer} ${
        show ? styles.mountedStyle : styles.unmountedStyle
      }`}
    >
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  );
}
