
// import Index from 'src/pages/index'
// import Detail from 'src/pages/detail'
// import List from 'src/pages/list'
import { lazy } from 'react';
const Index = lazy(() => import('src/pages/index'));
const Detail = lazy(() => import('src/pages/detail'));
const Complex = lazy(() => import('src/pages/complex'));
const Context = lazy(() => import('src/pages/context'));
const errorBoundary = lazy(() => import('src/pages/error-boundary'));
const refCom = lazy(() => import('src/pages/ref-com'));
const HOC = lazy(() => import('src/pages/hoc'));
const Portal = lazy(() => import('src/pages/portal'));

const routerConfig = [
  {
    path: '/',
    navName: '首页',
    component: Index,
    showInNav: true,
  },
  {
    path: '/complex',
    navName: '综合',
    component: Complex,
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
    path: '/portal',
    navName: 'portal',
    component: Portal,
    showInNav: true,
  },
  {
    path: '/detail/:id',
    navName: '详情',
    component: Detail,
  },
];



export default routerConfig;