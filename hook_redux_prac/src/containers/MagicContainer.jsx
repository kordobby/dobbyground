import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Magic from '../components/Magic';
import { useRef} from 'react';

import { addspell } from '../redux/modules/magicReducer';

function MagicContainer() {

  // useSelector
  const spellList = useSelector( state => ( state.magicReducer ));
                                        // 여기에 리듀서가 당연히 있지 바보야
  const spellRef = useRef(null);
  const cateRef = useRef(null);
  const aboutRef = useRef(null);

  const dispatch = useDispatch();

  const onAddSpell = () => {
    dispatch(addspell(spellRef.current.value, cateRef.current.value, aboutRef.current.value));
    spellRef.current.value = "";
    cateRef.current.value = "";
    aboutRef.current.value = "";
    };                      // useRef
  return (
    <>
        <input type = "text" ref = {spellRef} ></input>
        <input type = "text" ref = {cateRef} ></input>
        <input type = "text" ref = {aboutRef}></input>
        <button onClick={onAddSpell}> 👆 상품추가 👆</button>
      <Magic 
       spellList = { spellList } />
    </>
  )
}

export default MagicContainer;