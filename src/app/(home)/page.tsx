import React from "react";
import styles from "./style.module.css";
import Header from "../../components/Header/Header";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <Header />
      {/* <div className={styles.StyleCircle1} />
      <div className={styles.StyleCircle2} />
      <div className={styles.StyleCircle3} /> */}
      <Image
        src="/desenho.png"
        alt="desenho"
        quality={100}
        priority
        width={350}
        height={350}
      />
      <h1 className={styles.StyledTitle}>Oi! Sou o Erick, Software Engineer</h1>
      <input type="checkbox" />
    </div>
  );
}
