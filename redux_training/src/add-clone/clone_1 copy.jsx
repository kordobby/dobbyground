
// action type
const ADD_TODO = "todos/ADD_TODO";

// action functiong
export const addTodo = (payload) => {
  return { type : ADD_TODO, payload }
}

// Initial State
const initialState = {
  todos : [],
  loading : false,
  error : null
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO :
      return {
        ...state,
        todos : [...state.todos, action.payload]
      };
  }
}