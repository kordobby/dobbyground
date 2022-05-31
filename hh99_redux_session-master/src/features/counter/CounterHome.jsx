import React, { useState } from "react";
import { Text } from "../../components";
import { Button, Stack } from "../../elem";

const CounterHome = () => {
  // local state
  const [number, setNumber] = useState(0);

  // handler
  const onClickAddButtonHandler = () => {
    setNumber(number + 1);
  };

  const onClickMinusButtonHandler = () => {
    setNumber(number - 1);
  };

  return (
    <Stack direction="col" align="center" mg="50px 0">
      <Text variant="head01">{number}</Text>
      <Stack gap="12px" justify="center" mg="10px">
        <Button onClick={onClickAddButtonHandler}>1 더하기</Button>
        <Button onClick={onClickMinusButtonHandler}>1 빼기</Button>
      </Stack>
    </Stack>
  );
};

export default CounterHome;
