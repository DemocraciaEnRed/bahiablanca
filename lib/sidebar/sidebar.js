/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var render = require('render');
var events = require('events');
var bus = require('bus');
var classes = require('classes');
var template = require('./sidebar-container');
var filter = require('./filter');
var list = require('./list');
var lawsFilter = require('laws-filter');
var StatefulView = require('stateful-view');
var log = require('debug')('democracyos:sidebar:view');

/**
 * Expose SidebarView
 */

module.exports = SidebarView;

/**
 * Create Sidebar List view container
 */

function SidebarView() {
  if (!(this instanceof SidebarView)) {
    return new SidebarView();
  };

  StatefulView.call(this, template);
  this.filtercontainer = this.find('#filter-container');
  this.listcontainer = this.find('#list-container');
}

StatefulView(SidebarView);

SidebarView.prototype.switchOn = function() {
  filter.ready(this.bound('onfilterready'));
  bus.on('vote', this.vote.bind(this));
}

SidebarView.prototype.switchOff = function() {
  bus.off('vote', this.vote);
}

SidebarView.prototype.onfilterready = function() {
  filter.appendTo(this.filtercontainer[0]);
  list.ready(this.onlistready.bind(this));
};

SidebarView.prototype.onlistready = function() {
  list.appendTo(this.listcontainer[0]);
  this.state('loaded');
};

SidebarView.prototype.vote = function (id) {
  list.vote(id);
  this.removeUnrelated();
}

SidebarView.prototype.items = function(index) {
  return lawsFilter.items()[index];
};

SidebarView.prototype.select = function(id) {
  var els = this.find('ul.nav.navlist li');
  var el = this.find('ul.nav.navlist li[data-id="' + id + '"]');

  els.removeClass('active');
  els.removeClass('hide');
  el.addClass('active');
  this.removeUnrelated(id);

  return this;
}

SidebarView.prototype.removeUnrelated = function (id) {
  id = id || this.selected();
  var parent = lawsFilter.getParent(id);
  if (parent) {
    var other = this.find('ul.nav.navlist li.parent:not([data-id="' + parent.id + '"])');
    other.addClass('hide');
  }
}

SidebarView.prototype.selected = function() {
  if (!this.items()) return null;

  var el = this.el.querySelector('ul.nav.navlist li.active');
  var id = el ? el.getAttribute('data-id') : null;

  return id ? get(this.items(), 'id === "%id"'.replace('%id', id)) : null;
}

SidebarView.prototype.nextOf = function(id) {
  function parse(el) {
    var id = el.attr('data-id');
    var title = el.find('.title').html();
    return { id: id, title: title };
  }

  // Fetch the active element
  var el = this.listcontainer.find('ul.nav.navlist .children li[data-id="' + id + '"]');
  var children = el.find('.children');
  if (children.length > 0) {
    // If it has children, it is the parent, so the next is the first child
    var first = children.find('li:first-child');
    return parse(first);
  } else {
    // If it has not children, it is a child. I should get the next sibling, if it has one.
    var next;
    try {
      next = el.next();
    } catch (e) {
      next = {}
    }
    return next.length ? parse(next) : null;
  }
};

/**
 * Handle errors
 *
 * @param {String} error
 * @return {SidebarView} Instance of `SidebarView`
 * @api public
 */

SidebarView.prototype.error = function(message) {
  // TODO: We should use `Error`s instead of
  // `Strings` to handle errors...
  // Ref: http://www.devthought.com/2011/12/22/a-string-is-not-an-error/
  this.state('error', message);
  log('error found: %s', message);

  // Unregister all `ready` listeners
  this.off('ready');
  return this;
}

function get(list, query) {
  var match;
  var test = new Function('_', 'return _.' + query);

  list.some(function(l) {
    if (test(l)) {
      match = l;
      return true;
    };
    return false;
  });
  return match || null;
}