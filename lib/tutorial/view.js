/*
 * Module dependencies.
 */

var citizen = require('citizen');
var dom = require('dom');
var View = require('view');
var template = require('./template');
var t = require('t');
var config = require('config');

/**
 * Expose TutorialView.
 */

module.exports = TutorialView;

/**
 * Signin TutorialView
 *
 * @return {TutorialView} `TutorialView` instance.
 * @api public
 */

function TutorialView () {
  if (!(this instanceof TutorialView)) {
    return new TutorialView();
  }

  View.call(this, template);
}

/**
 * Inherit from `FormView`
 */

View(TutorialView);
