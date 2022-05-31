// aciton type
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// 서버에서 요청
const GET_TODOS_REQUEST = "todos/GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS";
const GET_TODOS_ERROR = "todos/GET_TODOS_ERROR";

// clean up
const CLEAN_TODOS = "todos/CLEAN_TODOS";

// action creator (action creator는 dispatch()의 인자로 들어갈 구성요소 입니다.)
export const addTodo = (payload) => {
  // payload : 새로운 Todo 데이터
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  // payload : 삭제하고자 하는 Todo의 아이디
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const cleanTodos = () => {
  return {
    type: CLEAN_TODOS,
  };
};

const getTodoRequest = (payload) => {
  return { type: GET_TODOS_REQUEST, payload };
};

const getTodosSuccess = (payload) => {
  return { type: GET_TODOS_SUCCESS, payload };
};

const getTodoError = (payload) => {
  return { type: GET_TODOS_ERROR, payload };
};

// (((((Tunuk function )))))
export const __getTodos = () => async (dispatch, gstState) => {
  // 서버 요청 시작 시, 로딩을 ture로 변경
  dispatch(getTodoRequest(true));
  try {
    // 서버 요청 성공 시, 할 동작들을 구현
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/todos?_page=1")
    ).json();
    // 성공했을 때는 getTodosSuccess() dispatch 함
    dispatch(getTodosSuccess(data));
  } catch (error) {
    // 실패했을 때는 getTodoError() dispatch 함
    dispatch(getTodoError(error));
  } finally {
    // 모든 동작이 끝났을 때, 로딩상태를 false로 변경해줌
    dispatch(getTodoRequest(false));
  }
};

// initial state (todos 모듈 state의 구조이자, 초기 값 입니다.)
const initialState = {
  todos: [],
  loading: false,
  error: null,
};

// reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAN_TODOS:
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default todos;
