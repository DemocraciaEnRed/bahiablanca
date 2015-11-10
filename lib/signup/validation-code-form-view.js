/*
 * Module dependencies.
 */

var FormView = require('form-view');
var template = require('./validation-code-form');
var title = require('title');
var page = require('page');

/**
 * Expose ValidationCodeForm.
 */

module.exports = ValidationCodeForm;

/**
 * Proposal Comments view
 *
 * @return {ValidationCodeForm} `ValidationCodeForm` instance.
 * @api public
 */

function ValidationCodeForm () {
  if (!(this instanceof ValidationCodeForm)) {
    return new ValidationCodeForm();
  }

  FormView.call(this, template);
}

/**
 * Inherit from `FormView`
 */

FormView(ValidationCodeForm);

ValidationCodeForm.prototype.switchOn = function() {
  this.on('success', this.bound('showSuccess'));
};

/**
 * Show success message
 */

ValidationCodeForm.prototype.showSuccess = function() {
  page('/signup/validated');
};

