import React from 'react';
import NotFound from './pages/NotFound';

const Home = React.lazy(() =>
  import(/* webpackChunkName: "home" */ './pages/Home'),
);

const About = React.lazy(() =>
  import(/* webpackChunkName: "about" */ './pages/About'),
);

const Users = React.lazy(() =>
  import(/* webpackChunkName: "users" */ './pages/Users'),
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
    id: 'about',
    path: '/about',
    name: 'About',
    component: About,
    exact: true,
  },
  {
    id: 'users',
    path: '/users',
    name: 'Users',
    component: Users,
    exact: true,
  },
  {
    id: 'not-found',
    component: NotFound,
    excludeFromSidebar: true,
  },
];

export default routes;
