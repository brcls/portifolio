// MyLists.js
import React, { useEffect, useState } from "react";
import styles from "./MyLists.module.css";
import List from "../List/List";

export default function MyLists() {
  const [lists, setLists] = useState([]);

  return (
    <div className={styles.StyledContainer}>
      {lists.map((list, index) => (
        <List key={index} list={list} show={false} />
      ))}
    </div>
  );
}
