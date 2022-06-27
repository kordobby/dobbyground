import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Magic from '../components/Magic';
import { useRef } from 'react';

import { addSpell, delSpell } from '../redux/modules/magicReducer';
// 나 addSpell 액션함수 사용할 것임  

function MagicContainer() {

  // useSelector : 나 store 에서 state 가져와서 사용할 건데, state 중에서 magicReducer 가 가지고있는걸로 쓸거야!
  // 나는 그렇게 가져온 state 값을 spellList에 담을거란다!
  const spellList = useSelector( state => ( state.magicReducer ));
                                        // 여기에 리듀서가 당연히 있지 바보야

  // input이 가지고있는 value 를 추적해서 가져와야하니, DOM 에 접근!                                      
  // const spellRef = useRef(null);

  const dispatch = useDispatch();

  const [newSpell, setNewSpell] = useState("");

  const spellHandler = (event) => {
    const { value } = event.target;
    setNewSpell(value);
  }

  const addSpellHandler = () => {
    dispatch(addSpell(newSpell));
  }

  const delHandler = (payload) => {
    dispatch(delSpell(payload));
  } 
  
  const spellBox = spellList.spells.map((value, index) => (
    <div key = {index}>
      <p> 1. 마법 주문 : {value}</p>
      <button onClick = { () => delHandler(index) } >삭제!</button>
   </div>
  ))

  return (
    <>
        <input type = "text" onChange = {spellHandler}></input>
        <button onClick={addSpellHandler}> 👆 상품추가 👆</button>
        {spellBox}
      {/* <Magic 
       spellList = { spellList.spells } />  내가 store에서 가져온 state 값을 props로 넘겨서 사용할 것
       { spellList } => [(...), (...)]  모습으로 저장되어 있음 */}
    </>
  )
}

export default MagicContainer;