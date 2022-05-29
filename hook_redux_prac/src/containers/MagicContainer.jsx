import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Magic from '../components/Magic';
import { useRef } from 'react';

import { addSpell } from '../redux/modules/magicReducer';
// 나 addSpell 액션함수 사용할 것임  

function MagicContainer() {

  // useSelector : 나 store 에서 state 가져와서 사용할 건데, state 중에서 magicReducer 가 가지고있는걸로 쓸거야!
  // 나는 그렇게 가져온 state 값을 spellList에 담을거란다!
  const spellList = useSelector( state => ( state.magicReducer ));
                                        // 여기에 리듀서가 당연히 있지 바보야

  // input이 가지고있는 value 를 추적해서 가져와야하니, DOM 에 접근!                                      
  const spellRef = useRef(null);
  const cateRef = useRef(null);
  const aboutRef = useRef(null);

  const dispatch = useDispatch();

  // onAddSpell 이란 함수를 만들건데, 이 함수는 input에서 받아온 값들을 addspell에 전달해서 state 값을 update 할거야!
  const onAddSpell = () => {
    {/* addSpell 의 parameter 를 떠올려보면 (spell, category, about) 이었으니 아래처럼 작성하면 그 값으로 이용되겠죠? */}
    dispatch(addSpell(spellRef.current.value, cateRef.current.value, aboutRef.current.value));
    spellRef.current.value = "";
    cateRef.current.value = "";
    aboutRef.current.value = "";
    };                      // useRef

  console.log(addSpell);
  console.log(spellList);
  return (
    <>
        <input type = "text" ref = {spellRef} ></input>
        <input type = "text" ref = {cateRef} ></input>
        <input type = "text" ref = {aboutRef}></input>
        <button onClick={onAddSpell}> 👆 상품추가 👆</button>
      <Magic 
       spellList = { spellList } />  {/* 내가 store에서 가져온 state 값을 props로 넘겨서 사용할 것 */}
       {/* { spellList } => [(...), (...)]  모습으로 저장되어 있음 */}
    </>
  )
}

export default MagicContainer;