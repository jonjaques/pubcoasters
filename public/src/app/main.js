requirejs.config({
  baseUrl: './app',
  paths: {
    ember       : '../vendor/ember'
    handlebars  : '../vendor/handlebars'
    jquery      : '../vendor/jquery'
    bootstrap   : '../vendor/bootstrap'
  },
  shim: {
    ember: {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jQuery.fn.affix'
    }
  }
});

require([
  'app',
  'router',
  'routes/index'
],
function(App, router) {
  window.App = App;
});
