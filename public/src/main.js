requirejs.config({
  baseUrl: 'app',
  paths: {
    'ember'       : '../vendor/ember',
    'handlebars'  : '../vendor/handlebars',
    'jquery'      : '../vendor/jquery',
    'bootstrap'   : '../vendor/bootstrap'
  },
  shim: {
    'ember': {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jQuery.fn.affix'
    }
  }
});

require(['ember'], function(Ember) {

  window.App = Ember.Application.create();

  App.Router.map(function() {
    // put your routes here
  });

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return ['red', 'yellow', 'blue'];
    }
  });

});

