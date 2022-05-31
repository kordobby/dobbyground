import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/* Redux things */
import { Provider } from 'react-redux';
import store from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>   {/* 사용하고 싶은 전역상태 범위만큼 Provider 적용, 전역상태의 data 창고인 store 를 props로 넘김 */}
    <App />
  </Provider>
  // Provider 안에 라우터 
);

// Router는 Provider 안에 위치..!?