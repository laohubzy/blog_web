import Home from '@pages/home/Home';
import BasicLayout from '@components/basicLayout/BasicLayout';
import Articel from '../pages/article/Article';
import About from '../pages/about/About';
import Time from '../pages/time/Time';


const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        title: '首页',
        component: Home,
      },
      {
        path: '/articel',
        title: '文章',
        component: Articel,
      },
      {
        path: '/time',
        title: '时间轴',
        component: Time,
        // hideBar: true,
      },
      {
        path: '/about',
        title: '关于我',
        component: About,
      },
    ],
  },
];

export default routes;
