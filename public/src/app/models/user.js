define(['app', 'ember-data'], function(App, DS) {

  App.User = DS.Model.extend({
    username    : DS.attr('string'),
    password    : DS.attr('string'),
    name        : DS.attr('string'),
    coasters    : DS.hasMany('App.Coaster')
  });

  return App.Coaster;

});