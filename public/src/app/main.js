requirejs.config({
  paths: {
    ember       : '../vendor/ember',
    'ember-data': '../vendor/ember-data',
    handlebars  : '../vendor/handlebars',
    jquery      : '../vendor/jquery',
    bootstrap   : '../vendor/bootstrap'
  },
  shim: {
    templates: {
      deps: ['ember', 'handlebars'],
      exports: 'Ember.TEMPLATES'
    },
    ember: {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jQuery.fn.affix'
    }
  }
});

require([
  'jquery'
  , 'app'
  , 'config'
  , 'router'
  , 'bootstrap'

  // ROUTES
  , 'routes/index'
  , 'routes/coasters/base'
  , 'routes/coasters/index'
  , 'routes/coasters/show'
  , 'routes/coasters/new'

  // MODELS
  , 'models/coaster'

  // VIEWS
  , 'views/bootstrap'

  // CONTROLLERS
  , 'controllers/application'
  , 'controllers/coasters'


],
function($, App, config, router) {

  window.App = App;

  App.set('config', config);

  var root = $(App.rootElement);

  root.find('.loading-text').fadeOut(100, function() {
    $(this).remove();
    root.removeClass('loading');
    App.advanceReadiness();
  });

});