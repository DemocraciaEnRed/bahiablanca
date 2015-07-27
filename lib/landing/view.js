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

  View.call(this, template, {
    laws: laws.getParents(),
    authors: laws.getAuthors(),
    tags: laws.getTags(),
    filter: {
      author: t('landing.filter.author.all'),
      tags: t('landing.filter.tag.all')
     }
  });

  // Author filter
  var authorFilterEl = this.find('.toggle-author');
  this.authorFilter = new ToggleParent(authorFilterEl[0]);
  this.authorFilterStatus = '0';

  // Tag filter
  var tagFilterEl = this.find('.toggle-tag');
  this.tagFilter = new ToggleParent(tagFilterEl[0]);
  this.tagFilterStatus = '0';
}

/**
 * Inherit from `FormView`
 */

View(LandingView);

LandingView.prototype.switchOn = function() {
  this.list = new List('landing', { valueNames: ['law-title', 'law-closing-date', 'law-author', 'law-tag'] });

  // React to filter changes
  this.bind('click', '.author-filter .btn-group ul .filter-item', this.bound('onAuthorFilterChange'));
  this.bind('click', '.tag-filter .btn-group ul .filter-item', this.bound('onTagFilterChange'));
};

LandingView.prototype.onAuthorFilterChange = function(ev) {
  ev.preventDefault();
  var li = o(ev.target.parentNode);
  var id = li.attr('data-id');
  var text = li.find('a').html();
  this.authorFilterStatus = id;
  this.updateFilters();

  // Update filter dropdown
  this.find('.toggle-author strong').html(text);
  this.authorFilter.hide();
};

LandingView.prototype.onTagFilterChange = function(ev) {
  ev.preventDefault();
  var li = o(ev.target.parentNode);
  var id = li.attr('data-id');
  var text = li.find('a').html();
  this.tagFilterStatus = id;
  this.updateFilters();

  // Update filter dropdown
  this.find('.toggle-tag strong').html(text);
  this.tagFilter.hide();
};

LandingView.prototype.updateFilters = function() {
  var view = this;
  if ('0' === this.tagFilterStatus && '0' === this.authorFilterStatus) {
    this.list.filter();
  } else if ('0' === this.tagFilterStatus) {
    this.list.filter(function(item) {
      var val = item.values();
      return val['law-author'] === view.authorFilterStatus;
    });
  } else if ('0' === this.authorFilterStatus) {
    this.list.filter(function(item) {
      var val = item.values();
      return val['law-tag'] === view.tagFilterStatus;
    });
  } else {
    this.list.filter(function(item) {
      var val = item.values();
      return val['law-tag'] === view.tagFilterStatus && val['law-author'] === view.authorFilterStatus;
    });
  }
};
