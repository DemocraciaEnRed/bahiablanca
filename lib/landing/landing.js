var page = require('page');
var o = require('dom');
var LandingView = require('./view');

page('/', function(ctx, next) {
  var container = o('#content');
  container.empty();
  var view = new LandingView();
  view.appendTo(container);
});