define(['app', 'ember'], function(App, Ember) {

  App.CoastersShowRoute = Ember.Route.extend({
    model: function(params) {
      return App.Coaster.find(params.coaster_id);
    }
  });

});