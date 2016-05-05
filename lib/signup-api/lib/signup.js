/**
 * Module dependencies.
 */

var log = require('debug')('democracyos:signup');
var utils = require('lib/utils');
var api = require('lib/db-api');
var t = require('t-component');
var config = require('lib/config');
var notifier = require('lib/notifications');
var SignupStrategy = require('lib/signup-strategy');
var emailWhitelisting = require('lib/whitelist-strategy-email')();
var normalizeEmail = require('lib/normalize-email');
var User = require('lib/models').User;
var sms = require('lib/sms');

/**
 * Signups a user
 *
 * @param {Object} profile object with local signup data
 * @param {Obehect} meta user's ip, user-agent, etc
 * @param {Function} callback Callback accepting `err` and `user`
 * @api public
 */

exports.doSignUp = function doSignUp (profile, meta, callback) {
  profile.email = normalizeEmail(profile.email);

  var user = new User(profile);

  log('new user [%s] from Local signup [%s]', user.id, profile.email);

  user.reference = profile.reference;

  // Override validation mechanism for development environments
  if (config.env === 'development') user.emailValidated = true;

  var strategy = new SignupStrategy().use(emailWhitelisting);

  strategy.signup(user, function (err) {
    if (err) return callback(err);

    User.register(user, profile.password, function (err, user) {
      if (err) return callback(err);
      log('Saved user [%s]', user.id);
      sendValidation(user, 'signup', meta, callback);
    });
  });
};

/**
 * Validates user email if a valid token is provided
 *
 * @param {Object} formData contains token
 * @param {Function} callback Callback accepting `err` and `user`
 * @api public
 */
exports.validate = function validate (formData, callback) {
  log('email validate requested. token : [%s]', formData.token);
  var tokenId = formData.token;
  api.token.get(tokenId, function (err, token) {
    log('Token.findById result err : [%j] token : [%j]', err, token);
    if (err) return callback(err);
    if (!token) {
      return callback(new Error('No token for id ' + tokenId));
    }

    log('email validate requested. token : [%s]. token verified', formData.token);
    api.user.get(token.user, function (err, user) {
      if (err) return callback(err);
      log('about email validate. user : [%s].', user.id);
      user.emailValidated = true;
      user.save(function (err) {
        if (err) return callback(err);
        log('Saved user [%s]', user.id);
        token.remove(function (err) {
          if (err) return callback(err);
          log('Token removed [%j]', token);
          return callback(err, user);
        });
      });
    });
  });
};

/**
 * Sends a new validation email to a user
 *
 * @param {Object} profile object with the email address
 * @param {Obehect} meta user's ip, user-agent, etc
 * @param {Function} callback Callback accepting `err` and `user`
 * @api public
 */
exports.resendValidation = function resendValidation (profile, meta, callback) {
  if (config.smsValidation) {
    resendValidationSms(profile, meta, callback);
  } else {
    resendValidationEmail(profile, meta, callback);
  }
};

function resendValidationEmail (profile, meta, callback) {
  log('Resend validation email to [%s] requested', profile.email);

  api.user.getByEmail(profile.email, function (err, user) {
    if (err) return callback(err);
    if (!user) return callback(new Error(t('common.no-user-for-email')));
    if (user.emailValidated) {
      return callback(new Error(t('signup.user-already-validated')));
    }
    log('Resend validation email to user [%j] requested', user);
    sendValidationEmail(user, 'resend-validation', meta, callback);
  });
}

function resendValidationSms (profile, meta, callback) {
  log('Resend validation sms to [%s] requested', profile.email);

  api.user.getByPhone(profile.phone, function (err, user) {
    if (err) return callback(err);
    if (!user) return callback(new Error(t('common.no-user-for-phone')));
    if (user.emailValidated) {
      return callback(new Error(t('signup.user-already-validated')));
    }
    log('Resend validation phone to user [%j] requested', user);
    sendValidation(user, 'resend-validation', meta, callback);
  });
}

/**
 * Creates a token and sends a validation email to a user
 *
 * @param {Object} user to send the email to
 * @param {String} name of the event that causes the validation email to be sent
 * @param {Obehect} meta user's ip, user-agent, etc
 * @param {Function} callback Callback accepting `err` and `user`
 */
function sendValidation (user, event, meta, cb) {
  api.token.createEmailValidationToken(user, meta, function (err, token) {
    if (err) return cb(err);

    if (config.smsValidation) {
      sendValidationSms(user, event, token, cb);
    } else {
      sendValidationEmail(user, event, token, cb);
    }
  });
}

function sendValidationSms (user, event, token, cb) {
  var message = 'Creaste una cuenta en DEMOS Bahía Blanca con este telefono. Para validarla ingresa el siguiente código en la aplicacion: ' + token.id;
  sms.send(user.phone, message, cb);
}

function sendValidationEmail (user, event, token, cb) {
  var validateUrl = utils.buildUrl(config, {
    pathname: '/signup/validate/' + token.id,
    query: (user.reference ? { reference: user.reference } : null)
  });

  if (notifier.enabled()) {
    notifier.notify(event)
      .to(user.email)
      .withData({ validateUrl: validateUrl })
      .send(function (err, data) {
        if (err) {
          log('Error when sending notification for event %s to user %j', event, user);
          return cb(err);
        }

        return cb(null, data);
      });
  } else {
    log('Notifier is disabled: unable to send account validation mail to user');
    return cb(new Error('Couldn\'t send validation email.'));
  }
}
