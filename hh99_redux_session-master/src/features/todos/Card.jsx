import React from "react";
import styled from "styled-components";
import { Text } from "../../components";
import { Button, Stack } from "../../elem";

const Card = ({ todo, onClickDeleteButtonHandler }) => {
  const { title, userId, completed, id } = todo;
  return (
    <StCard onClick={() => onClickDeleteButtonHandler(id)}>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <div>{completed ? "✅" : "❌"}</div>
      <Stack justify="end">
        <Button>삭제</Button>
      </Stack>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  width: 300px;
  height: 120px;
  border: 1px solid var(--green);
  border-radius: 8px;
  padding: 5px;
`;
