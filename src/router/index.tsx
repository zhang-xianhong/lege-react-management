// 懒加载，需要使用React.Suspens包围
import React, { FC, lazy, ReactElement } from 'react';
const About = lazy(() => import('../views/About'));
const Page1 = lazy(() => import('../views/Page1'));
const Page2 = lazy(() => import('../views/Page2'));
import Home from '../views/Home';

import { Navigate } from 'react-router-dom';
const withLoadingComponent = (component: ReactElement): ReactElement => (
  <React.Suspense fallback={<div>Loading...</div>}>{component}</React.Suspense>
);
const routes = [
  // {
  //   path: '/',
  //   element: <Navigate to='/home' />,
  // },
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
  // {
  //   path: '/about',
  //   element: withLoadingComponent(<About />),
  // },
  // 嵌套路由
  {
    path: '/',
    element: <Navigate to='/page1' />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  {
    path: '/about',
    element: withLoadingComponent(<About />),
  },
];

export default routes;
