import { Config } from '@stencil/core'; 
import {sass} from '@stencil/sass';

export const config: Config = {
  buildEs5: false,
  bundles: [
    { components: ['admin-page', 'admin-delete', 'admin-new', 'admin-edit'] },
    { components: ['renfe-header', 'renfe-footer'] },
    { components: ['home-page', 'renfe-jumbo', 'type-writter'] },
    { components: ['results-page', 'results-nav', 'results-table', 'weather-container'] },
    { components: ['root-page', 'search-widget'] }
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'http://ranfe.vercel.app',
    }
  ],
  plugins: [
    sass(),
  ],
  extras: {
    cssVarsShim: false,
    safari10: false,
    scriptDataOpts: false,
    initializeNextTick: false,
    dynamicImportShim: false,
    shadowDomShim: false,
  }
};
