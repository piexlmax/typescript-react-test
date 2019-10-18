import * as ReactDOM from 'react-dom';
import * as React from 'react';
// 引入跟组件 方便后期做后台路由 （留坑）
import App from './app';
// react-redux 引入 Provider 将store挂到react的context
import { Provider } from 'react-redux'
// 引入封装好的store
import store from 'src/store/index'
import './main.css';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app') as HTMLElement
);
