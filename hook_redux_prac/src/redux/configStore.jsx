/* Redux things */
import { createStore } from "redux";
import rootReducer from './modules';

const store = createStore(rootReducer); // store 생성, Reducer store를 parameter로
             /* createStore 이 녀석이 state 와 action 을 담고있는 녀석이라면
                rootReducer를 파라미터에 넣음으로써, 해당 reducer가 들고있는 action과 state를 가져와서
                설정된 action 과 state의 알맹이들을 자신이 들고있는 state 와 action 에 담아서 관리? */ 
export default store;

