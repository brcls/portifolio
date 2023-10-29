import React from "react";
import styles from "./styles.module.css";

export default function Aurora() {
  return (
    <div className={styles.animated}>
      <div className={styles.wrapper}>
        <div className={styles.one} />
        <div className={styles.three} />
        <div className={styles.four} />
      </div>
    </div>
  );
}
