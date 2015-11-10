/*
 * Module dependencies.
 */

var t = require('t');
var FormView = require('form-view');
var template = require('./signup-form');
var title = require('title');
var page = require('page');

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
  page('/signup/validate-code');
};

