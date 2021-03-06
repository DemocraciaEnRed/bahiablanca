/*
 * Module dependencies.
 */

var t = require('t');
var FormView = require('form-view');
var template = require('./signup-form');
var title = require('title');
var page = require('page');
var config = require('config');

/**
 * Expose SignupForm.
 */

module.exports = SignupForm;

/**
 * Proposal Comments view
 *
 * @return {SignupForm} `SignupForm` instance.
 * @api public
 */

function SignupForm (reference) {
  if (!(this instanceof SignupForm)) {
    return new SignupForm(reference);
  };

  FormView.call(this, template, { reference: reference });
}

/**
 * Inherit from `FormView`
 */

FormView(SignupForm);

SignupForm.prototype.switchOn = function() {
  this.on('success', this.bound('showSuccess'));
};

/**
 * Show success message
 */

SignupForm.prototype.showSuccess = function() {
  if (config.smsValidation) {
    page('/signup/validate-code');
  } else {
    var form = this.find('#signup-form');
    var success = this.find('#signup-message');

    var welcomeMessage = this.find('#signup-message h1');
    var firstName = this.get('firstName');
    var lastName = this.get('lastName');
    var fullname = firstName + ' ' + lastName;

    title(t('signup.complete'));
    var message = t('signup.welcome', { name: fullname });
    welcomeMessage.html(message);
    form.addClass('hide');
    success.removeClass('hide');
  }
};

