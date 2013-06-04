define(['app'], function(App) {
  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return ['red', 'yellow', 'blue'];
    }
  })
})