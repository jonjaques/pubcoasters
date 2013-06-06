define(['app', 'ember'], function(App, Ember) {

  App.CoastersIndexRoute = Ember.Route.extend({
    model: function() {
      return App.Coaster.all();
    }
  });

  return App.CoastersIndexRoute;

});