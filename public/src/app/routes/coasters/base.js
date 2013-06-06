define(['app'], function(App) {

  App.CoastersRoute = Ember.Route.extend({
    setupController: function(controller, stuff) {
      controller.set('coasters', App.Coaster.find());
    }
  });

  return App.CoastersRoute;

});