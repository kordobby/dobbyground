# 전생했더니 리덕스 마스터가 된 건에 대하여

## #1. add data
### * set action & reducer
```javascript
/* action type */
const ADD_TODO = "todos/ADD_TODO";

/* action Creator - dispatch() 의 parameter로 들어갈 구성요소 */
export const addToDo = (payload) => {
  // payload : new TODO data
  return { type : ADD_TODO, payload };
}

/* Initial State */
// todo module state의 구조이자 초깃값
const initialState = {
  todos : [],
  loading : false,
  error : null
};

/* reducer */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO :
      return {
        ...state,
        todos : [...state.todos, action.payload]
      };
  }
}
```

### * use reducer
```javascript
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../modules/todos";

const TodosHome = () => {
  const dispatch = useDispatch();

  // Todos local state
  const { todos } = useSelector((state) => state.todos);

  // 새로 등록할 Todo state 세팅 => Store에 들어갈 data로 활용될 예정
  const [newTodo, setNewTodo] = useState({
    id: 0,
    userId: 0,
    title: "",
    completed: false,
  });

  /* input onchange handler */
  // 1. <input> value 가져오기 - onChange event
  // 2. value 를 이용해 todo list 에 들어갈 data 주머니 setup
  const onChangeTodoTitleInputHandler = (event) => {
    const { value } = event.target;
    setNewTodo({
      ...newTodo,                 // newTodo 의 일부 key:value 값 덮어쓰기할 것
      id: todos.length + 1,       // id는 todos array의 길이 +1 씩 설정
      userId: todos.length + 1,   // userId는 todos array의 길이 +1 씩 설정
      title: value
    });
  };
  
/*  newTodo History
// => newTodo 라는 state는 이런식으로 설정되어 바뀌어갈 것
{
  id : todos.length +1,
  userId : todos.length +1,
  title : value
  completed : false
}
*/

  /* newTodo 등록 handler */
  // => 위에서 형성된 newTodo 객체를 DB에 담아줌
  const onSubmitNewTodoFormHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));   // 액션함수 addTodo 실행, payload에 newTodo 저장
                                  // ** remind **  payload : new TODO data!
  };

  /*
  [ 1. payload 의 현재 value ]
  payload = {
    id : todos.length +1,
    userId : todos.length +1,
    title : value
    completed : false
  }

  [ 2. addTodo(newTodo) 동작 시 data 변화 ]
  * 액션함수
  =>  {...state, todos : [...state.todos, action.payload] };
  =>  기존 state 값의 todos : value 를 위와 같이 덮어쓸 것
  =>  덮어쓰는 value는 기존 저장된 데이터들 뒤에 새롭게 받아온 데이터를 넣어줄 것

  * store에서 가져왔던 state.todos   (todos는 내 리듀서 이름, 헷갈리지 말자)
  =>  todos: []

  * 결국 액션이 발동되며 데이터가 저장되는 형태는,
  => todos: [ {statedata1}, {statedata2}, ... , paload ]
  => todos : [ ..... { id : todos.length +1,
                      userId : todos.length +1,
                      title : value
                      completed : false}]
*/
  return (
    <>
    </>
  );
};

export default TodosHome;
```

