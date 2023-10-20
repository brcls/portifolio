// List.js
import React from "react";
import styles from "./List.module.css";

export default function List({
  list,
  show,
}: {
  list: { titulo: string; itens: string[] };
  show: boolean;
}) {
  const containerStyle: React.CSSProperties = show
    ? (styles.mountedStyle as React.CSSProperties)
    : (styles.unmountedStyle as React.CSSProperties);

  return (
    <div className={styles.StyledContainer} style={containerStyle}>
      <h1 className={styles.StyledTitle}>{list.titulo}</h1>
      {list.itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
