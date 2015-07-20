var page = require('page');
var o = require('dom');
var LandingView = require('./view');
var laws = require('laws').middleware;

page('/', laws, function(ctx, next) {
  o(document.body).removeClass('browser-page');
  var view = new LandingView();
  view.replace('#content');
});
