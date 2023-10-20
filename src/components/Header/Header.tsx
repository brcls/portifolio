// Header.js
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <Link href="/" className={styles.Link}>
        <h1 className={styles.SubTitle}>Home</h1>
      </Link>
      <Link href="/contato" className={styles.Link}>
        <h1 className={styles.SubTitle}>Contato</h1>
      </Link>
    </div>
  );
}
