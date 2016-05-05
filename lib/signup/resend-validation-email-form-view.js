/*
 * Module dependencies.
 */

var FormView = require('form-view');
var t = require('t');
var config = require('config');
var template = require('./resend-validation-email-form');
var title = require('title');
var page = require('page');

/**
 * Expose ResendValidationEmailForm.
 */

module.exports = ResendValidationEmailForm;

/**
 * Proposal Comments view
 *
 * @return {ResendValidationEmailForm} `ResendValidationEmailForm` instance.
 * @api public
 */

function ResendValidationEmailForm () {
  if (!(this instanceof ResendValidationEmailForm)) {
    return new ResendValidationEmailForm();
  }

  FormView.call(this, template);
  if (config.smsValidation) {
    this.errors([t('resend-validation-sms-form.error.sms-not-valid.no-link')]);
  } else {
    this.errors([t('resend-validation-email-form.error.email-not-valid.no-link')]);
  }
}

/**
 * Inherit from `FormView`
 */

FormView(ResendValidationEmailForm);

ResendValidationEmailForm.prototype.switchOn = function() {
  this.on('success', this.bound('showSuccess'));
};

/**
 * Show success message
 */

ResendValidationEmailForm.prototype.showSuccess = function() {
  if (config.smsValidation) {
    page('/signup/validate-code');
  } else {
    var form = this.find('#resend-form');
    var success = this.find('#resend-message');
    title(t('signup.resend-validation-email-complete'));
    form.addClass('hide');
    success.removeClass('hide');
  }
};
