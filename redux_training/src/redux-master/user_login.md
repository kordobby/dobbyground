# 전생했더니 리덕스 마스터가 된 건에 대하여

## Login & out & Sign up
### * set action & reducer
```javascript
/* action type */
const UPDATE_MEMO = "todos/UPDATE_MEMO";

/* action Creator - dispatch() 의 parameter로 들어갈 구성요소 */
export const updateMemo = (payload) => {
  return { type: UPDATE_MEMO, payload };
};

/* Thunk Function */
export const __updateMemo = (payload, index) => async (dispatch, getState) => {
  const docRef = doc(db, "memo", payload.id);
  await updateDoc(docRef, {
    comment: payload.comment,
    word: payload.word,
    ex: payload.ex,
  });
  dispatch(updateMemo({ payload, index }));
};

// initial state (todos 모듈 state의 구조이자, 초기 값 입니다.)
const initialState = {
  todos: [],
  loading: false,
  error: null,
};

/* reducer */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MEMO:
      const newChangeMemo = state.todos.map((value, index) => {
        return index === Number(action.payload.index) ? action.payload.payload : value;
      });
      return { ...state, memo: newChangeMemo };
  }
}
```

### * use reducer

```javascript
const TodosHome = () => {
  const dispatch = useDispatch();

  // Todos local state
  const { todos, error, loading } = useSelector((state) => state.todos);  // 리듀서의 state 조회
         // []  , false , true

  useEffect(() => {
    dispatch(__getTodos());  // 화면이 mount 됐을 때 dispatch 실행
    return () => {       
    };
  }, [dispatch]);

  // JSX
  if (loading)
    return (
      <Stack justify="center">
        <Text variant="head01" color="blue">
          로딩 중....!
        </Text>
      </Stack>
    );

  if (error)
    return (
      <Stack justify="center">
        <Text variant="head01" color="red">
          에러가 발생했습니다.
        </Text>
      </Stack>
    );

  return (

  );
};

export default TodosHome;
```