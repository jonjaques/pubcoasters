define(['app', 'ember-data'], function(App, DS) {

  App.Coaster = DS.Model.extend({
    name: DS.attr('string'),
    desc: DS.attr('string'),
    images: DS.attr('array'),
    tags: DS.attr('array')
  });

  return App.Coaster;

});