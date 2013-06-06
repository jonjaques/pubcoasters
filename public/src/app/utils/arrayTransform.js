define(['ember', 'ember-data', 'jquery'], function(Ember, DS, $) {

  DS.RESTAdapter.registerTransform('array', {

    deserialize: function(value) {
      if (typeof value === 'string') {
        return value.split(',');
      } else {
        return value;
      }
    },

    serialize: function(value) {
      var plainArray = [];
      if (value && value instanceof Array) {
        value.forEach(function(val) {
          plainArray.push(val);
        })
      }
      return plainArray;
    }

  });

});