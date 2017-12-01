exports.config = {
  bundles: [
    { components: ['admin-page', 'admin-delete', 'admin-new', 'admin-edit'] },
    { components: ['renfe-header', 'renfe-footer'] },
    { components: ['home-page', 'renfe-jumbo', 'type-writter'] },
    { components: ['results-page', 'results-nav', 'results-table', 'weather-container'] },
    { components: ['root-page', 'search-widget'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: 'ionicons' },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
