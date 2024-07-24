import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'toggle',
  taskQueue: 'async',
  sourceMap: true,
  enableCache: true,

  extras: {
    enableImportInjection: true,
  },

  plugins: [sass()],

  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'toggle',
      directivesProxyFile: '../toggle-angular/src/directives/proxies.ts',
      valueAccessorConfigs: [],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      includeGlobalScripts: false,
    },
  ],
};
