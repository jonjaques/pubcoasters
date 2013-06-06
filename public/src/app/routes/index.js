define(['app'], function(App) {

  App.IndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('coasters');
    }
  });

  return App.IndexRoute;

});