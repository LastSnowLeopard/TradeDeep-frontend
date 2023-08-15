import { lazy } from 'react';

const ModelConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/buildmodel',
      component: lazy(() => import('./Model')),
    },
  ],
};

export default ModelConfig;
