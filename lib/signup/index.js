/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express();
var config = require('lib/config');

function redirect(req, res) {
  var path = req.params.path || '';
  var url = config.signupUrl + (path ? '/' + path : '');
  res.redirect(url);
}

if (config.signupUrl) {
  app.get('/signup', redirect);
  app.get('/signup/:path', redirect);
}

/**
 * Block access to users with incomplete profiles.
 */

app.get('/signup', require('lib/layout'));
app.get('/signup/complete', require('lib/layout'));
app.get('/signup/validate/:token', require('lib/layout'));
app.get('/signup/validated', require('lib/layout'));
app.get('/signup/resend-validation-email', require('lib/layout'));
app.get('/signup/validate-code', require('lib/layout'));

