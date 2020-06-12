
// import Index from 'src/pages/index'
// import Detail from 'src/pages/detail'
// import List from 'src/pages/list'
import { Suspense, lazy } from 'react';
const Index = lazy(() => import('src/pages/index'));
const Detail = lazy(() => import('src/pages/detail'));
const List = lazy(() => import('src/pages/list'));

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
    path: '/detail/:id',
    navName: '详情',
    component: Detail,
  },
];



export default routerConfig;