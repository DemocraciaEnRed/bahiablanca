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
 * Expose AboutView.
 */

module.exports = AboutView;

/**
 * Signin AboutView
 *
 * @return {AboutView} `AboutView` instance.
 * @api public
 */

function AboutView () {
  if (!(this instanceof AboutView)) {
    return new AboutView();
  }

  View.call(this, template);
}

/**
 * Inherit from `FormView`
 */

View(AboutView);
