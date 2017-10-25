import Root from './components/Root';
import App from './components/App';
import Login from './components/auth/Login';
import NotFound from './components/NotFound';

import Home from './components/Home';

export default [
  {
    component: Root,
    routes: [
      {
        path: '/login',
        auth: false,
        exact: true,
        component: Login,
      },
      {
        path: '/',
        auth: true,
        component: App,
        routes: [
          {
            path: '/',
            auth: true,
            exact: true,
            index: 'home',
            component: Home,
          },
          {
            component: NotFound,
          },
        ],
      },
      {
        component: NotFound,
      },
    ],
  },
];
