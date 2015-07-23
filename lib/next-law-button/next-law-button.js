/**
 * Module dependencies.
 */

var t = require('t');
var template = require('./template');
var View = require('view');
var sidebar = require('sidebar');

module.exports = NextLawButton;

function NextLawButton(lawId) {
  if (!(this instanceof NextLawButton)) {
    return new NextLawButton(lawId);
  }

  this.lawId = lawId;
  this.setLocals();
  View.call(this, template, { nextLaw: this.nextLaw });
}

View(NextLawButton);

NextLawButton.prototype.setLocals = function() {
  this.nextLaw = sidebar.nextOf(this.lawId);
};