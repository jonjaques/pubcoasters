define([
  'ember',
  'ember-data',
  'config',
  'filepicker',

  // Static
  'templates',  // This will not exist until templates are compiled via Grunt
  'utils/arrayTransform',
  'utils/webapiAdapter',
  'utils/webapiSerializer'
],
function(Ember, DS, config, filepicker) {

  var App = Ember.Application.create({
    rootElement: '#applicationHost',
    LOG_TRANSITIONS: true
  });

  App.set('config', config);

  filepicker.setKey(config.filepicker.apiKey);

  var adapter = DS.WebAPIAdapter.create({
      bulkCommit: false
  });

  App.Store = DS.Store.extend({
    revision: 13,
    adapter: adapter
  });

  DS.WebAPIAdapter.map('App.Coasters', {
    // Web API server is not handling reference update/delete,
    // so use "load" instead of "always"
    // todos: { embedded: 'load' }
  });

  var serializer = Ember.get(adapter, 'serializer');

  // serializer.configure('App.TodoList', {
  //   sideloadAs: "todoList",
  //   primaryKey: "todoListId"
  // });

  // serializer.configure('App.Coaster', {
  //   sideloadAs: "coaster",
  //   primaryKey: "id"
  // });

  App.deferReadiness();

  return App;

});
