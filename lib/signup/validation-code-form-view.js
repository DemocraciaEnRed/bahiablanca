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

function ValidationCodeForm (opts) {
  if (!(this instanceof ValidationCodeForm)) {
    return new ValidationCodeForm(opts);
  }

  this.action = opts ? opts.action : null;
  FormView.call(this, template, { action: this.action });
}

/**
 * Inherit from `FormView`
 */

FormView(ValidationCodeForm);

ValidationCodeForm.prototype.switchOn = function() {
  this.on('success', this.bound('showSuccess'));
};

ValidationCodeForm.prototype.postserialize = function (data) {
  if ('reset' === this.action) {
    window.location = '/forgot/reset/' + data.token;
  }
};

/**
 * Show success message
 */

ValidationCodeForm.prototype.showSuccess = function() {
  if ('reset' !== this.action) {
    page('/signup/validated');
  }
};

