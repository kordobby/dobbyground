
// action type
const ADD_TODO = "todos/ADD_TODO";

// action func
const addTodoFunc = (payload) => {
  return { type : ADD_TODO, payload}
}

// initialSTATE
const intialState = {
  data : [],
  loading : false,
  error : null
}

// reducer 
const addTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO :
      return {
        ...state,
        action.payload
      }
  }
}