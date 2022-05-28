/*
과제 react-redux로 한번, toolkit으로 한번 만들어보기
- 쇼핑몰에 상품추가 reducer / 내가좋아하는단어 추가 reducer
- html - 페이지를 반으로 나눠서, 한쪽은 쇼핑몰 상품추가, 다른한쪽은 단어추가 페이지
- 각 페이지 중앙에 input창 3개씩있음
 - input종류: 상품이름/상품가격/상품설명, 단어이름/단어설명/단어예시
- 생성된 상품이나 단어 옆에 수정 및 삭제 버튼(필수아님)
- css 필요없습니다.
- 목표: redux에 대한 깊은 이해 및 CRUD 구현법 익히기.
*/

import MagicContainer from "./containers/MagicContainer.jsx";

function App() {
   return (
    <>
      <MagicContainer />
    </>
   );
 }

 export default App;