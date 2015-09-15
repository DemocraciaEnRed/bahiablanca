/**
 * Module dependencies.
 */

var o = require('dom');
var page = require('page');
var t = require('t');
var title = require('title');
var Tutorial = require('./view');

page('/como-funciona', function(ctx, next) {
  var tutorial = new Tutorial();
  tutorial.replace('#content');

  title(t('tutorial.title'));
  o(document.body).addClass('tutorial');
});