import React from "react";
import styled from "styled-components";
import Stack from "../elem/Stack";
import Text from "../elem/Text";
import flex from "../lib/flex";

export default function Header() {
  return (
    <StHeader>
      <Stack justify="between" align="center">
        <Text variant="head01" color="red">
          리덕스 기초 배우기
        </Text>
        <Text variant="head02" color="green">
          예상기 님!
        </Text>
      </Stack>
    </StHeader>
  );
}

const StHeader = styled.header`
  ${flex({})}
  border-bottom: 1px solid var(--grey);
  width: 100%;
  height: 70px;
  padding: 0 12px;
`;
