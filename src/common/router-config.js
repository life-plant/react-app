
// import Index from 'src/pages/index'
// import Detail from 'src/pages/detail'
// import List from 'src/pages/list'
import { lazy } from 'react';
const Index = lazy(() => import('src/pages/index'));
const Detail = lazy(() => import('src/pages/detail'));
const List = lazy(() => import('src/pages/list'));
const Context = lazy(() => import('src/pages/context'));
const errorBoundary = lazy(() => import('src/pages/error-boundary'));
const refCom = lazy(() => import('src/pages/ref-com'));
const HOC = lazy(() => import('src/pages/hoc'));

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
    path: '/context',
    navName: '上下文',
    component: Context,
    showInNav: true,
  },
  {
    path: '/error-boundary',
    navName: '错误边界',
    component: errorBoundary,
    showInNav: true,
  },
  {
    path: '/ref-com',
    navName: 'ref使用',
    component: refCom,
    showInNav: true,
  },
  {
    path: '/hoc',
    navName: '高阶组件',
    component: HOC,
    showInNav: true,
  },
  {
    path: '/detail/:id',
    navName: '详情',
    component: Detail,
  },
];



export default routerConfig;