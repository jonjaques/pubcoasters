requirejs.config({
  paths: {
    ember       : '../vendor/ember',
    'ember-data': '../vendor/ember-data',
    handlebars  : '../vendor/handlebars',
    jquery      : '../vendor/jquery',
    bootstrap   : '../vendor/bootstrap',
    filepicker  : 'https://api.filepicker.io/v1/filepicker'
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
    },
    filepicker: {
      exports: 'filepicker'
    }
  }
});

require([
  'jquery'
  , 'app'
  , 'router'
  , 'bootstrap'

  // ROUTES
  , 'routes/index'
  , 'routes/coasters'
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
  , 'controllers/coasters/new'


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