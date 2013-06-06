define(['ember', 'ember-data', 'jquery'], function(Ember, DS, $) {

  DS.RESTAdapter.registerTransform('array', {

    deserialize: function(serialized) {
      if (Ember.typeOf(serialized) === 'string') {
        return serialized.split(',').forEach(function(item) {
          return $.trim(item);
        });
      } else if (Ember.typeOf(serialized) === 'array') {
        return serialized;
      } else {
        return [];
      }
    },

    serialize: function(deserialized) {
      if (Ember.typeOf(deserialized) === 'array') {
        return deserialized;
      } else {
        return [];
      }
    }

  });

});