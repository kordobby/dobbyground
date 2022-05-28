
/* eslint-disable */

/* 1. input 태그 2개, button 태그 1개만듬 (+)
2. 페이지 로딩되면 input에 dom접근해서 바로 커서가 input위에 잡히게 (+)
3. input으로 쓰고 버튼누르면 누른값이 state로 들어가게 (+)
4. 그리고 state에 들어온값을 글쓴 input말고 다른 input창 안에 띄워주기 (+)
5. button에는 hover를 css말고 js로 만들건데, 마우스가 올라가면 뭐든 보여주기 예시) console.log(마우스올라감), 마우스내려가면 console.log(마우스내려감)
6. 버튼 누르는 함수는 콜백관리 */


import { useRef, useState, useEffect, useCallback } from 'react';


function App() {

   // useRef 사용, input 속성 가져오기
   const inputRef = useRef();
   const [ inputText, setInputText ] = useState("");

   // 클릭 시 작동되는 함수, value 가져오기
   const handleBtnClick = () => {
      const inputValue = inputRef.current.value;
      setInputText(inputValue);
   };

   const handleMouseOver = useCallback((event) => {
      console.log(event.target);
   });

   // 자동 focus
   useEffect(() => {
      inputRef.current.focus();
      window.addEventListener('mouseover', handleMouseOver);
      return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      };
   }, []);

   return (
     <>  { /* 1번 끝남 */ }
        <input type = "text" ref = {inputRef} ></input>
        <button id = "helpMe" onClick = {handleBtnClick}>👆 뿅 👆</button>
        <input type = "text" defaultValue = {inputText} ></input>
     </>
   );
 }

 export default App;