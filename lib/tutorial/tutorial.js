/**
 * Module dependencies.
 */

var citizen = require('citizen');
var o = require('dom');
var page = require('page');
var t = require('t');
var title = require('title');
var Tutorial = require('./view');
var cookie = require('cookie');

page('/como-funciona', function(ctx, next) {
  var tutorial = new Tutorial();

  title(t('tutorial.title'));

  tutorial.replace('#content');

  o(document.body).addClass('tutorial');
});