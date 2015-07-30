/**
 * Module dependencies.
 */

var t = require('t');
var template = require('./template');
var View = require('view');

module.exports = NextLawButton;

function NextLawButton(sidebar, lawId) {
  if (!(this instanceof NextLawButton)) {
    return new NextLawButton(lawId);
  }

  this.sidebar = sidebar;
  this.lawId = lawId;
  this.setLocals();
  View.call(this, template, { nextLaw: this.nextLaw });
}

View(NextLawButton);

NextLawButton.prototype.setLocals = function() {
  this.nextLaw = this.sidebar.nextOf(this.lawId);
};