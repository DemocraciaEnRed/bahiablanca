var template = require('./template');
var View = require('view');
var laws = require('laws');

/**
 * Expose LandingView.
 */

module.exports = LandingView;

/**
 * Signin LandingView
 *
 * @return {LandingView} `LandingView` instance.
 * @api public
 */

function LandingView () {
  if (!(this instanceof LandingView)) {
    return new LandingView();
  }

  View.call(this, template, { laws: laws.getParents() });
}

/**
 * Inherit from `FormView`
 */

View(LandingView);

