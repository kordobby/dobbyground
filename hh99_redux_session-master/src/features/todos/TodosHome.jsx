import React, { useState } from "react";
import { Button, Stack, Text } from "../../elem";
import Card from "./Card";
import styled from "styled-components";

const TodosHome = () => {
  // Todos local state
  const [todos, setTodo] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ]);

  // 새로 등록할 Todo state
  const [newTodo, setNewTodo] = useState({
    id: 0,
    userId: 0,
    title: "",
    completed: false,
  });

  // input onchange handler
  const onChangeTodoTitleInputHandler = (e) => {
    const { value } = e.target;
    setNewTodo({
      ...newTodo,
      id: todos.length + 1,
      userId: todos.length + 1,
      title: value,
    });
  };

  //
  const onClickDeleteButtonHandler = (id) => {
    console.log(id);
    const remainTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    console.log(remainTodos);
    setTodo(remainTodos);
  };

  // JSX
  return (
    <StContainer>
      <form
        onSubmit={(e) => {
          // 새로고침 방지
          e.preventDefault();

          setTodo([...todos, newTodo]);
          setNewTodo({
            id: 0,
            userId: 0,
            title: "",
            completed: false,
          });
        }}
      >
        <Stack mg="30px 0" gap="10px" align="center">
          <Text variant="head01" color="blue">
            제목
          </Text>
          <StInput
            value={newTodo.title}
            type="text"
            name="title"
            onChange={onChangeTodoTitleInputHandler}
          />
          <Button>추가하기</Button>
        </Stack>
      </form>
      <Stack gap="12px" wrap="wrap">
        {todos.map((todo) => {
          return (
            <Card
              key={todo.id}
              todo={todo}
              onClickDeleteButtonHandler={onClickDeleteButtonHandler}
            />
          );
        })}
      </Stack>
    </StContainer>
  );
};

export default TodosHome;

const StContainer = styled.div`
  margin: 50px;
  width: 1000px;
`;

const StInput = styled.input`
  border: 1px solid var(--grey);
  height: 42px;
  width: 500px;
`;
