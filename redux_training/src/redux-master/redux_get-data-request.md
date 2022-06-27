# 전생했더니 리덕스 마스터가 된 건에 대하여

## #3. request for get data
### * set action & reducer
```javascript
/* action type */
const GET_TODOS_REQUEST = "todos/GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS";
const GET_TODOS_ERROR = "todos/GET_TODOS_ERROR";

/* action Creator - dispatch() 의 parameter로 들어갈 구성요소 */
const getTodoRequest = (payload) => {
  return { type : GET_TODOS_REQUEST, payload };
};

const getTodoSuccess = (payload) => {
  return { type : GET_TODOS_SUCCESS, payload };
};

const getTodoError = (payload) => {
  return { type : GET_TODOS_ERROR, payload };
};

/* Thunk Function */
export const __getTodos = () => async (dispatch, getState) => {
  // 서버 요청 시작시, 로딩을 true로 변경
  dispatch(getTodoRequest(true));
  // 서버 요청 성공 시, 할 동작들을 구현
  try {const data = await (await fetch("url")).json(); // 성공 시 getTodoSuccess() dispatch
        dispatch(getTodoSuccess(data));}
  // 실패 시 getTodoError() dispatch 
  catch (error) {dispatch(getTodoError(error));}
  // 모든 동작이 끝났을 때, 로딩 상태를 false 로 변경
  finally {dispatch(getTodoRequest(false));}
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
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: action.payload,    // 서버에 request를 보낼 때는 "loading:true"가 되며 요청을 보내기 시작 (thunk function 참조)
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],  // payload =작업 성공 결과
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        error: action.payload  // payload = 작업 실패 내용
      };
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