import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Stack from "../elem/Stack";
import Text from "../elem/Text";
import flex from "../lib/flex";

export default function Header() {
  const name = useSelector((state) => state.user.name);
  console.log(name);
  return (
    <StHeader>
      <Stack justify="between" align="center">
        <Text variant="head01" color="red">
          리덕스 기초 배우기
        </Text>
        <Text variant="head02" color="green">
          {name} 님!
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
