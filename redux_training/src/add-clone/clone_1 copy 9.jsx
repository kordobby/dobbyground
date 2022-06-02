

// action type
const ADD_TODO = 'reducer/ADD_TODO';

// action function
const addTodoFunc = (payload) => {
  return { type : ADD_TODO, payload }
}

// initial State
const initialState = {
  loading : false,
  error : null,
  todos : []
}

// Reducer
const todoReducer = ( state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO :
      return {
        ...state,
        todos : [...state.todos, action.payload]
      }
  }
}

