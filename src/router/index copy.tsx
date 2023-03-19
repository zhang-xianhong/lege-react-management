// 组件形式的写法
import App from '@/App';
import Home from '../views/Home';
import About from '../views/About';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// 两种路由形式: BrowserRouter(History模式),HashRouter(Hash模式)
const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        {/* 配置用户访问/的时候，重定向到/home路径 */}
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// React 16 17写法
// <Route path="/login" key="login" component={Login} />

export default baseRouter;
