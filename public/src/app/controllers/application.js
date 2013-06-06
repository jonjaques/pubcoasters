define(['app', 'ember'], function(App, Ember) {

  App.ApplicationController = Ember.Controller.extend({

    title: "Pubcoasters",

    newCoaster: function() {
      this.transitionToRoute('coasters.new');
    }

  });

  return App.ApplicationController;

});