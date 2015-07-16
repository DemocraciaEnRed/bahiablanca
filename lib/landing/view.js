var template = require('./template');
var View = require('view');

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

  View.call(this, template);
}

/**
 * Inherit from `FormView`
 */

View(LandingView);

