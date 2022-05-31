/* action type */

const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// action type :: server request
const GET_TODOS_REQEST = "todos/GET_TODOS_REQEST";
const GET_TODOS_SECCESS = "todos/GET_TODOS_SECCESS";
const GET_TODOS_ERROR = "todos/GET_TODOS_ERROR";

// action type :: clean up
const CLEAN_TODOS = "todos/CLEAN_TODOS";



/* action Creator - dispatch() 의 parameter로 들어갈 구성요소 */
export const addToDo = (payload) => {
  // payload : new TODO data
  return { type : ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  // payload : 삭제하고자 하는 TODO의 ID
  return {
    type : DELETE_TODO,
    payload
  };
};

export const cleanTodos = () => {
  return {
    type : CLEAN_TODOS
  };
};


const getTodosRequest = (payload) => {
  return {type : GET_TODOS_REQEST, payload};
};

const getTodosSuccess = (payload) => {
  return {type: GET_TODOS_SECCESS, payload};
};

const getTodoError = (payload) => {
  return { type : GET_TODOS_ERROR, payload};
};


/* Thunk Function */
export const __getTodos = () => async (dispatch, getState) => {
  // severe request 시작 시, loading을 true로 변경
  dispatch(getTodosRequest(true));
  try {
    // server request 성공 시, 하게될 동작들 구현
      const data = await (
        await fetch("https://jsonplaceholder.typicode.com/todos?_page=1")).json();
        // 성공 시 getTodosSuccess() dispatch 함
        dispatch(getTodosSuccess(data));
      } catch (error) {
        // 실패 시 getTodoError() dispatch 함
        dispatch(getTodoError(error));
      } finally {
        dispatch(getTodosRequest(false));
      }
  };

/* initial state */
// todo module state의 구조이자 초깃값
const initialState = {
  todos: [],
  loading : false,
  error : null
};

/* reducer */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO  :
      return {
        ...state,
        todos : [...state.todos, action.payload]
      };
    
    /*

    */

    case DELETE_TODO :
      return {
        ...state,
        todos : state.todos.filter((todo) => {
          return todo.id !== action.payload;
        }),
      }

    /*
    state = {
      todos: [] =>  [...state.todos, action.payload]
      loading : false,
      error : null
    }   
    */

    case GET_TODOS_REQEST:
      return {
        ...state,
        loading: action.payload
      };
    case GET_TODOS_SECCESS :
      return {
        ...state,
        todos: [...state.todos, ...action.payload]
      };
    case GET_TODOS_ERROR :
      return {
        ...state,
        error:action.payload
      };
      default:
        return state;
  }
};

export default todos;