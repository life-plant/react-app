
// import Index from 'src/pages/index'
// import Detail from 'src/pages/detail'
// import List from 'src/pages/list'
import { lazy } from 'react';
const Index = lazy(() => import('src/pages/index'));
const Detail = lazy(() => import('src/pages/detail'));
const List = lazy(() => import('src/pages/list'));
const Theme = lazy(() => import('src/pages/theme'));
const errorBoundary = lazy(() => import('src/pages/error-boundary'));


const routerConfig = [
  {
    path: '/',
    navName: '首页',
    component: Index,
    showInNav: true,
  },
  {
    path: '/list',
    navName: '列表',
    component: List,
    showInNav: true,
  },
  {
    path: '/theme',
    navName: '主题',
    component: Theme,
    showInNav: true,
  },
  {
    path: '/error-boundary',
    navName: '错误边界',
    component: errorBoundary,
    showInNav: true,
  },
  {
    path: '/detail/:id',
    navName: '详情',
    component: Detail,
  },
];



export default routerConfig;