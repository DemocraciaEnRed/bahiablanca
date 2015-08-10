var template = require('./template');
var View = require('view');
var laws = require('laws');
var List = require('list.js');
var o = require('dom');
var t = require('t');
var authorFilter = require('./buttons/author-filter');
var tagFilter = require('./buttons/tag-filter');
var sortButton = require('./buttons/sort');

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

  this.laws = laws.getParents();

  // Modifies the summary HTML so that the `a` elements
  // are targeted to `_blank`
  this.laws.forEach(function(law) {
    var html = law.summary;
    var div = document.createElement('div');
    var el = o(html);
    el.find('a').attr('target', '_blank');
    el.appendTo(div);
    law.summary = o(div).text();
  });

  View.call(this, template, {
    laws: this.laws
  });

  var view = this;

  // Author filter
  this.authorFilter = authorFilter()
  .on('change', function(value) {
    view.applyFilters();
  })
  .appendTo(this.find('#author-filter')[0]);

  // Tag filter
  this.tagFilter = tagFilter()
  .on('change', function(value) {
    view.applyFilters();
  })
  .appendTo(this.find('#tag-filter')[0]);

  this.sortButton = sortButton()
  .on('change', function(value) {
    if ('0' !== value.id) {
      view.list.sort(value.id, { order: 'asc' })
    }
  })
  .appendTo(this.find('#sort-button')[0]);
}

/**
 * Inherit from `FormView`
 */

View(LandingView);

LandingView.prototype.switchOn = function() {
  this.list = new List('landing', { valueNames: ['law-title', 'law-closing-date', 'law-author', 'law-tag'] });
  this.list.on('searchComplete', this.onFilterApplied.bind(this));
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

  this.onFilterApplied();
};

LandingView.prototype.onFilterApplied = function(ev) {
  var el = this.find('#nomatch');
  if (this.list.matchingItems.length) {
    el.addClass('hide');
  } else {
    el.removeClass('hide');
  }
};
