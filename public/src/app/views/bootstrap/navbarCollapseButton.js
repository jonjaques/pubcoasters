define(['ember', './base'], function(Ember, boot) {

  boot.navbarCollapseButton = Ember.View.extend({
    templateName: 'views/bootstrap/navbarCollapseButton'
  });

  return boot.navbarCollapseButton;

});