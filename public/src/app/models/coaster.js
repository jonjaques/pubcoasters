define(['app', 'ember-data'], function(App, DS) {

  App.Coaster = DS.Model.extend({
    name    : DS.attr('string'),
    desc    : DS.attr('string'),
    images  : DS.attr('array'),
    tags    : DS.attr('array'),

    primaryImage: function() {
      var images = this.get('images');
      if (images instanceof Array && images.length) {
        return images[0];
      } else {
        return null;
      }
    }.property('images')

  });

  return App.Coaster;

});