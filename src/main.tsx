import React from 'react';
import ReactDOM from 'react-dom/client';
// 正确的样式顺序
// 安装reset-css用于初始化全局样式，放在最前面
import 'reset-css';
// UI框架的样式

// 全局样式
import '@/assets/styles/global.scss';

import Router from './router';

// 组件的样式
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Router /> */}
  </React.StrictMode>,
);
