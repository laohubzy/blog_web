import Home from '../pages/home/home';
import Articel from '../pages/article/article';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/Articel',
    component: Articel,
  },
];

export default routes;
