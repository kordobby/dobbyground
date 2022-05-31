import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../elem/Text";
import flex from "../lib/flex";

const Navigation = () => {
  const name = useSelector((state) => state.user.name);
  return (
    <StContaienr>
      <Text variant="head01" color="blue">
        안녕하세요, {name}님?
      </Text>
      <Text>메뉴1</Text>
      <Text>메뉴2</Text>
      <Text>메뉴3</Text>
      <Text>메뉴4</Text>
    </StContaienr>
  );
};

export default Navigation;

const StContaienr = styled.div`
  width: 20%;
  min-width: 300px;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 12px;
  height: calc(100vh - 110px);
  padding: 24px;

  /* flex */
  ${flex({ direction: "column", gap: "24px" })}
`;
