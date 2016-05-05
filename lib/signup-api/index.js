/**
 * Module dependencies.
 */

var express = require('express');
var signup = require('./lib/signup');
var jwt = require('lib/jwt');
var config = require('lib/config');
var l10n = require('lib/l10n');
var log = require('debug')('democracyos:signup');

/**
 * Exports Application
 */

var app = module.exports = express();

if (config.signupUrl) return;

/**
 * Define routes for SignUp module
 */

app.post('/', function(req, res) {
  var meta = {
    ip: req.ip,
    ips: req.ips,
    host: req.get('host'),
    origin: req.get('origin'),
    referer: req.get('referer'),
    ua: req.get('user-agent')
  };

  var profile = req.body;
  profile.locale = l10n.requestLocale(req);

  signup.doSignUp(profile, meta, function (err) {
    if (err) {
      log('Found error: ', err);
      return res.json(200, { error: err.message });
    }
    return res.json(200);
  });
});

app.post('/validate', function(req, res) {
  signup.validate(req.body, function (err, user) {
    if (err) {
      log('Found error: ', err);
      return res.json(200, { error: err.message });
    }
    return jwt.signin(user, req, res);
  })
});

app.post('/resend-validation-email', function(req, res) {
  var meta = {
    ip: req.ip,
    ips: req.ips,
    host: req.get('host'),
    origin: req.get('origin'),
    referer: req.get('referer'),
    ua: req.get('user-agent')
  };

  signup.resendValidation(req.body, meta, function (err) {
    if (err) {
      log('Found error: ', err);
      return res.json(200, { error: err.message });
    }
    return res.json(200);
  })
});
