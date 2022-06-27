# 전생했더니 리덕스 마스터가 된 건에 대하여

## #2. delete data
### * set action & reducer
```javascript
/* action type */
const DELETE_TODO = "todos/DELETE_TODO";

/* action Creator - dispatch() 의 parameter로 들어갈 구성요소 */
export const deleteTodo = (payload) => {
  // payload : 삭제하고자 하는 Todo의 ID
  return {
    type : DELETE_TODO,
    payload
  };
}; 

/* Initial State */
// todo module state의 구조이자 초깃값
const initialState = {
  todos : [],
  loading : false,
  error : null
};

// ADD_TODO 과정에서 만들어진 todos data 모습을 떠올리자.
/* todos : [ { id : todos.length +1,
               userId : todos.length +1,
               title : value
               completed : false}] */

/* reducer */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO :
      return {
        ...state,           // filter : 조건 확인 시, true면 요소를 유지, false면 버림
        todos : state.todos.filter((value) => {       // state의 todo 배열에 filter 적용, 
          return value.id !== action.payload;         // value 의 id key 값의 value가 새롭게 받아온 id 값과 같지 않은 것만 배열 내에 유지시킴
        })                                            // 즉, 일치하는 id 에 해당되는 데이터는 버려짐
      };
  }
}
```

### * use reducer

```javascript
import Card from "./Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../modules/todos";

const TodosHome = () => {
  const dispatch = useDispatch();

  /* delete btn handler */
  // 1. deleteTodo 의 parameter 로 받아온 id는 payload 로 저장
  // 2. 
  const onClickDeleteButtonHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
        {todos.map((todo) => {    // todos 배열의 각 값들을 하나씩 넣어준 Card를 만들어냄
          return (
            <Card
              key={todo.id}
              todo={todo}
              onClickDeleteButtonHandler={onClickDeleteButtonHandler}    // 함수 props로 넘김
                />
              );
            })}
      );
    };
</>

export default TodosHome;
```

```javascript
import React from "react";
import styled from "styled-components";
import { Text } from "../../components";
import { Button, Stack } from "../../elem";

const Card = ({ todo, onClickDeleteButtonHandler }) => {
  const { title, userId, completed, id } = todo;  // Card 의 props 로 받아온 todo 를 비구조화
  return (
    <StCard onClick={() => onClickDeleteButtonHandler(id)}>
        {/* onClickDeleteButtonHandler = (id) => {dispatch(deleteTodo(id));};*/} 
                                        {/* id 는 위 todo 비구조화에서 분리해낸 id 변수의 값! */}
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
```