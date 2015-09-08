var page = require('page');
var AboutView = require('./view');

page('/about', function(ctx, next) {
  var view = new AboutView();
  view.replace('#content');
});
