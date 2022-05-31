import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../../components";
import { Button, Stack } from "../../elem";
import { minus, plus } from "../../modules/coutner";

const CounterHome = () => {
  const dispatch = useDispatch();
  // local state
  const number = useSelector((state) => state.counter);

  // handler
  const onClickAddButtonHandler = () => {
    dispatch(plus());
  };

  const onClickMinusButtonHandler = () => {
    dispatch(minus());
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
