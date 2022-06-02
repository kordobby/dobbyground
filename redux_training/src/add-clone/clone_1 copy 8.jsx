//1
cosnt ADD_TODO = 'reducer/ADD_TODO';
//2
export const addTodo = (payload) => {
  return { type : ADD_TODO, payload}
}

//3 

const initialState = {
  todos : [],
  loading : false,
  error : null
}

//4 reducer

const todos = (state = initialState, action) => {
  switch  (action.type) {
    case ADD_TODO :
      return {
        ...state,
        todos : [...state.todos, action.payload]
      }
  }
}

