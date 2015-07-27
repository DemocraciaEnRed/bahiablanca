var template = require('./template');
var View = require('view');
var laws = require('laws');
var List = require('list.js');
var ToggleParent = require('toggle-parent');
var t = require('t');
var o = require('dom');

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

  View.call(this, template, { laws: laws.getParents(), authors: laws.getAuthors(), filter: { author: t('landing.filter.author.all') } });
  var authorFilterEl = this.find('.toggle-author');
  this.authorFilter = new ToggleParent(authorFilterEl[0]);
}

/**
 * Inherit from `FormView`
 */

View(LandingView);

LandingView.prototype.switchOn = function() {
  this.list = new List('landing', { valueNames: ['law-title', 'law-closing-date', 'law-author'] });
  this.bind('click', '.author-filter-item', this.bound('onAuthorFilterChange'))
};

LandingView.prototype.onAuthorFilterChange = function(ev) {
  ev.preventDefault();
  var li = o(ev.target.parentNode);
  var id = li.attr('data-id');
  var text = li.find('a').html();

  // Update items
  if ('0' === id) {
    this.list.filter();
  } else {
    this.list.filter(function(item) {
      return item.values()['law-author'] === id;
    })
  }

  // Update filter dropdown
  this.find('.toggle-author strong').html(text);
  this.authorFilter.hide();
};
