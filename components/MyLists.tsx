import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {} from "react-bootstrap";
import List from "./List";
import api from "../services/api";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function MyLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    api
      .get("/listas")
      .then(({ data }) => {
        setLists(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <StyledContainer>
      {lists.map((list) => (
        <List list={list} />
      ))}
    </StyledContainer>
  );
}
