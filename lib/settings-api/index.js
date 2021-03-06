/**
 * Module dependencies.
 */

var express = require('express');
var utils = require('lib/utils');
var restrict = utils.restrict;
var log = require('debug')('democracyos:settings');
var t = require('t-component');

/**
 * Exports Application
 */

var app = module.exports = express();

app.post('/profile', function(req, res) {
  if (!req.user) return log('Citizen not logged in'), res.send(403);
  var citizen = req.user;
  log('Updating citizen %s profile', citizen.id);

  citizen.firstName = req.body.firstName;
  citizen.lastName = req.body.lastName;
  citizen.profilePictureUrl = req.body.profilePictureUrl;
  citizen.locale = req.body.locale;
  citizen.email = req.body.email;
  citizen.phone = req.body.phone;
  citizen.dni = req.body.dni;

  if (citizen.isModified('email')) {
    log('Citizen must validate new email');
    citizen.emailValidated = false;
  }

  citizen.save(function(err) {
    var message = '';
    if (err) {
      if (err.errors && err.errors.phone) {
        message = t(err.errors.phone.message);
      } else if (err.errors && err.errors.email) {
        message = t(err.errors.email.message);
      }
      return res.json(500, { error: message || err.message });
    }
    res.send(200);
  });
});

app.post('/password', restrict, function(req, res) {
  var citizen = req.user;
  var current = req.body.current_password;
  var password = req.body.password;
  log('Updating citizen %s password', citizen.id);

  // !!:  Use of passport-local-mongoose plugin method
  // `authenticate` to check if user's current password is Ok.
  citizen.authenticate(current, function(err, authenticated) {
    if (err) return res.json(500, { error: err.message });
    if (!authenticated) return res.json(403, { error: t('settings.password-invalid') });

    citizen.setPassword(password, function(err) {
      if (err) return res.json(500, { error: err.message });

      citizen.save(function(err) {
        if (err) return res.json(500, { error: err.message });
        res.send(200);
      });
    });
  });
});

app.post('/notifications', restrict, function(req, res) {
  log('Updating notifications settings with these new ones %j', req.body);
  var notifications = {};
  notifications.replies = !!req.body.replies;
  notifications['new-topic'] = !!req.body['new-topic'];
  var citizen = req.user;
  citizen.notifications = notifications;
  citizen.save(function (err) {
    if (err) return res.send(500);
    res.send(200);
  });
});