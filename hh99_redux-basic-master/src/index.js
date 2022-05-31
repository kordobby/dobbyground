import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";    // 사이트 성능 측정 엔드포인트 분석
import thunk from "redux-thunk";                    // 리덕스를 사용한 비동기 작업 처리의 가장 기본적인 방법이 thunk라는 미들웨어 사용
import { history } from "./modules";

/* Redux Setup */
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/* rootRuducer */
import rootReducer from "./modules";

/* Router config */
import { BrowserRouter } from "react-router-dom";

/* Store */
const store = createStore(
  rootReducer,
  {/* 이건 뭐지? */}
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ history })))
);

ReactDOM.render(
  // Provider로 감싸고 스토어 넣어주기
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
