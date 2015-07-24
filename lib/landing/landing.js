var page = require('page');
var o = require('dom');
var LandingView = require('./view');
var laws = require('laws').middleware;
var HugeOverlay = require('huge-overlay');
var welcome = require('./welcome.md');
var marked = require('marked');

page('/', laws, function(ctx, next) {
  o(document.body).removeClass('browser-page');
  var view = new LandingView();
  view.replace('#content');

  var html = marked(welcome);
  var overlay = new HugeOverlay(html);
  overlay.appendTo('body');
  setTimeout(function() {
    overlay.toggle()
  }, 3000)
});
