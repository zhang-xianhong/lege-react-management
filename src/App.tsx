import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Comp1 from '@/components/Comp1';
import { Outlet, Link, useRoutes } from 'react-router-dom';
import router from './router';

function App() {
  const [count, setCount] = useState(0);
  // React18使用useRoutes替代Outlet
  const outLet = useRoutes(router);

  return (
    <div className='App'>
      {/* 顶级组件
      <Comp1 /> */}
      {/* <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link> */}
      {/* 占位符组件 */}
      {/* <Outlet></Outlet> */}

      {outLet}
    </div>
  );
}

export default App;
