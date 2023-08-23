import { lazy } from 'react';

const NotebooksConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/notebooks',
      component: lazy(() => import('./Notebooks')),
    },
    {
      path: '/addnotebook',
      component: lazy(() => import('./addNotebook/')),
    },
  ],
};

export default NotebooksConfig;
