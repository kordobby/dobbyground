import React from 'react';


  function Magic( { spellList } ) {
  /* { spellList } => [(...), (...)]  모습으로 저장되어 있음
                   => [{spell : 'value', category : 'value', about : 'value'}]
  */

  const newSpell = spellList.map( (value, index ) => (
    <div key = {index}>
      <p> 1. 마법 주문 : {value.spell}</p> { /* v */ }
      <p> 2. 종류 : {value.category}</p>
      <p> 3. 설명 : {value.about}</p>
   </div>
  ))
  return (
    <>
      {newSpell}
    </>
  );
}

export default Magic;
