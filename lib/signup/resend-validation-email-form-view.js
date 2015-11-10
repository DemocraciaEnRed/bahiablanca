/*
 * Module dependencies.
 */

var FormView = require('form-view');
var t = require('t');
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
  };

  FormView.call(this, template);
  this.errors([t('resend-validation-sms-form.error.sms-not-valid.no-link')]);
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
  page('/signup/validate-code');
}
