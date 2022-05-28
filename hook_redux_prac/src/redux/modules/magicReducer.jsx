// 액션타입
const ADD_SPELL = 'magicReducer/ADD_SPELL';

// 액션함수
export const addspell = ( spell, category, about ) => ({ 
  type: ADD_SPELL,
  add : {
    spell,
    category,
    about
  }
});

const initialState = [
];

// 리듀서 선언
export default function magicReducer( state = initialState, action) {
  switch (action.type) {
    case ADD_SPELL:
      return state.concat(action.add);
    default:
      return state;
  }
}