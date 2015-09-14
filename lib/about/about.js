var page = require('page');
var AboutView = require('./view');

page('/acerca-de', function(ctx, next) {
  var view = new AboutView();
  view.replace('#content');
});
