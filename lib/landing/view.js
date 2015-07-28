var template = require('./template');
var View = require('view');
var laws = require('laws');
var List = require('list.js');
var t = require('t');
var dropdown = require('dropdown');

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
    laws: laws.getParents()
  });

  var view = this;

  // Author filter
  this.authorFilter = dropdown({
    caption: t('landing.filter.author.filterby') + ': %s',
    all: true,
    style: 'primary',
    items: laws.getAuthors().map(function(author) {
      return { id: author.id, text: author.name };
    })
  })
  .on('change', function(value) {
    view.applyFilters();
  })
  .appendTo(this.find('#author-filter')[0]);

  // Tag filter
  this.tagFilter = dropdown({
    caption: t('landing.filter.tag.filterby') + ': %s',
    all: true,
    style: 'primary',
    items: laws.getTags().map(function(tag) {
      return { id: tag.id, text: tag.name };
    })
  })
  .on('change', function(value) {
    view.applyFilters();
  })
  .appendTo(this.find('#tag-filter')[0]);
}

/**
 * Inherit from `FormView`
 */

View(LandingView);

LandingView.prototype.switchOn = function() {
  this.list = new List('landing', { valueNames: ['law-title', 'law-closing-date', 'law-author', 'law-tag'] });
};

LandingView.prototype.applyFilters = function() {
  var view = this;

  if ('0' === this.tagFilter.selectedValue() && '0' === this.authorFilter.selectedValue()) {
    this.list.filter();
  } else if ('0' === this.tagFilter.selectedValue()) {
    this.list.filter(function(item) {
      var val = item.values();
      return val['law-author'] === view.authorFilter.selectedValue();
    });
  } else if ('0' === this.authorFilter.selectedValue()) {
    this.list.filter(function(item) {
      var val = item.values();
      return val['law-tag'] === view.tagFilter.selectedValue();
    });
  } else {
    this.list.filter(function(item) {
      var val = item.values();
      return val['law-tag'] === view.tagFilter.selectedValue() && val['law-author'] === view.authorFilter.selectedValue();
    });
  }
};
