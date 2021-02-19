import React from 'react';
import NotFound from './pages/NotFound';

const Home = React.lazy(() =>
  import(/* webpackChunkName: "home" */ './pages/Home'),
);

const routes = [
  {
    id: 'home',
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    id: 'not-found',
    component: NotFound,
    excludeFromSidebar: true,
  },
];

export default routes;
