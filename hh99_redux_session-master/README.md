### 1. Component, Props, State 잘 숙지하고 있나요?
 -  Component, Props, State를 자유자재로 생성하고, props를 통해 state를 주고 받는 것을 100% 이해하고 있어야 합니다.
### 2. 언제 useState가 불편해지나?
 - 같은 state를 공유하는 component의 깊이가 깊어지고 복잡해질 수록 불편해진다. state를 사용하고자 하는 component까지 props drilling을 해야하기 때문
### 3. 리덕스 쉽게 쓰기!
  - 무조건 redux를 써야만 하나요? useState는 이제 안쓰나요?
    - local state 와 global state
  - 설정코드는 `복붙`하자
    - 우리는 리덕스를 잘 **사용**해야하는 것이지 리덕스를 **구현**하는게 아닙니다!
  - 리덕스의 구성요소 쉽게 기억하기
    - 구성요소의 데이터 형태로 기억하자
      - actions type : `object` (`type` key를 겪들인 **객체**)
      - action creatore : `function` (actions type을 반환하는 **함수**)
      - reducer : `function` (action type 별로 새로운 state를 반환하는 분기문이 있는 **함수**)
      - initial state : `any` (개발자의 마음대로 아무형태나 올 수 있음)
      - thunk function : `function` (함수를 리턴하는 함수)
        - `const somethingThunk = (args) => (dispatch, getState) => {}`
  - intialState는 어떻게 만들어야 하나? (undefined 피하기)
  - 모든 시작은 `dispatch` 부터
    - `const dispatch = useDispatch()`
  - redux-Thunk는 왜 써야 하나?
    - 로직 분리 및 server state 관리
      - data, loading, error 
  - redux-actions, redux-toolkit, immer라는 것들은 무엇인가요?
  - redux devtools 을 잘쓰자!

### 4. react-redux
 - **react-redux : react와 redux를 연결시켜주는 라이브러리**
 - useDispatch : action을 일으키는 훅
 - useSelector : redux store의 state들을 가져오는 훅 

### 5. 그 밖의 내용
 - Project Directory
   - `src/components` : 재사용되는 components가 있는 폴더
   - src/elem : component보다 단위가 작은 요소 component가 있는 폴더 
   - src/feature : 재사용되긴 하지만 특정 기능에서만 사용하는 component들이 있는 폴더
   - src/lib : 재사용되는 유틸 함수들이 모여있는 폴더
   - src/modules : 리덕스 모듈이 모여 있는 폴더

### More
 - react-qeury VS redux 