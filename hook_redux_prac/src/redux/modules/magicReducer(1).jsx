/* 내가 사용할 Reducer#1 */

// 1. action type 설정
const ADD_SPELL = 'magicReducer/ADD_SPELL';

// 2. 액션함수 생성 
            // 풀어서 생각해보자.....!
            // 1. addspell 이라는 액션함수를 만들 것임
            // 2. 해당 함수 안에서 나는 spell, category, about를 사용할 것
            /* 이제부터 addspell 이라는 액션 함수는
              ( spell, category, about ) => ({
                type : ADD_SPELL,
                add : { spell, category,  about } }) 모습으로 사용됨 */
            // 그럼 spell, category, about 은 어디에 저장된 상태지? => state 는 store에 저장되어있고, 그 값을 reducer가 수정해준다?
export const addSpell = ( spell, category, about ) => ({
  type: ADD_SPELL,
  add : {
    spell,
    category,
    about
  }
});

// 3. 초깃값 설정
const initialState = [];

// 4. Reducer 선언
                     // 4-1. 나는 magicReducer 라는 리듀서를 사용할거야
                     // 4-2. 이 함수는 state 와 action을 사용한단다!
export default function magicReducer( state = initialState, action ) {
  // 4-3. 이 함수는 swtich case의 모습으로 동작을 함
        // 4-4. swtich 는 magicReducer의 두번째 인자로 넣어준 action의 type을 case 적용의 조건으로 사용하게 될 것
  switch (action.type) {  // 왜 action.type 일까? => store 에서 관리하는 action 에 값이 담긴거라서?
    case ADD_SPELL:  // action type이 ADD_SPELL 인 경우,
      return state.concat(action.add);  // 배열형태로 선언된 magicReducer의 state에 action.add 를 넣어줄 것
                                        /* {  spell, category, about } */
    default:
      return state;
  }
}