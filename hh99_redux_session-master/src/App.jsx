import React, { useState } from "react";
import GlobalStyle from "./elem/GlobalStyle";
import styled from "styled-components";

import { Layout } from "./components";
import { Text } from "./elem";
import { CounterHome } from "./features/counter";
import { TodosHome } from "./features/todos";

export default function App() {
  const [mode, setMode] = useState("todos");
  const [name, setName] = useState("예상기");

  return (
    <>
      <GlobalStyle />
      <Layout>
        <StTab>
          <Text
            variant="head01"
            color={mode === "counter" ? "blue" : "grey"}
            onClick={() => {
              setMode("counter");
            }}
          >
            카운터
          </Text>
          <Text
            variant="head01"
            color={mode === "todos" ? "blue" : "grey"}
            onClick={() => {
              setMode("todos");
            }}
          >
            투두리스트
          </Text>
        </StTab>
        {mode === "counter" ? (
          <CounterHome />
        ) : mode === "todos" ? (
          <TodosHome />
        ) : null}
      </Layout>
    </>
  );
}

const StTab = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  height: 50px;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid var(--grey);
    padding: 12px;
    border-radius: 10px;
  }
`;
