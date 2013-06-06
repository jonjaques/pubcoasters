define(['app'], function(App) {

  App.Router.map(function() {

    this.route('login');

    this.resource('coasters', function() {
      this.route('new');
      this.route('show', { path: '/:coaster_id' });
      this.route('edit', { path: '/:coaster_id/edit' });
    });

    // this.resource('breweries', function() {
    //   this.route('new');
    //   this.route('show', { path: '/:brewery_id' });
    //   this.route('edit', { path: '/:brewery_id/edit' })
    // });

  });

  return App.Router;

});