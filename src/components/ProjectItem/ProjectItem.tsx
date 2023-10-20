// ProjectItem.js
import React from "react";
import styles from "./ProjectItem.module.css";
import Image from "next/image";

export default function ProjectItem({ project }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={styles.StyledLink}
    >
      <div className={styles.StyledCard}>
        {/* <Image
          src={`http://localhost:3000/${project.src}`}
          alt={project.titulo}
          width={0}
          height={0}
          loader={loaderProp}
        /> */}
      </div>
    </a>
  );
}
