import React from "react";
import styled from "styled-components";
import Stack from "../elem/Stack";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <Stack direction="col" justify="between" gap="12px">
      <Header />
      <Stack justify="between" gap="12px">
        <Navigation />
        <StContents>{children}</StContents>
      </Stack>
    </Stack>
  );
}

const StContents = styled.main`
  border: 1px solid var(--grey);
  border-radius: 12px;
  width: 100%;
  height: calc(100vh - 110px);
`;
