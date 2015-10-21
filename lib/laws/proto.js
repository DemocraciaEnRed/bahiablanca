/**
 * Module dependencies.
 */

var citizen = require('citizen');
var request = require('request');
var Stateful = require('stateful');
var log = require('debug')('democracyos:laws-proto');

/**
 * Expose `Laws` proto constructor
 */

module.exports = Laws;

/**
 * Laws collection constructor
 */

function Laws() {
  if (!(this instanceof Laws)) {
    return new Laws();
  };

  // instance bindings
  this.middleware = this.middleware.bind(this);
  this.fetch = this.fetch.bind(this);

  this.state('initializing');

  // Re-fetch laws on citizen sign-in
  citizen.on('loaded', this.fetch);

  this.fetch();
}

/**
 * Mixin Laws prototype with Emitter
 */

// Emitter(Laws.prototype);
Stateful(Laws);

/**
 * Fetch `laws` from source
 *
 * @param {String} src
 * @api public
 */

Laws.prototype.fetch = function(src) {
  log('request in process');
  src = src || '/api/law/all';

  this.state('loading');

  request
  .get(src)
  .end(onresponse.bind(this));

  function onresponse(err, res) {
    if (err || !res.ok) {
      var message = 'Unable to load laws. Please try reloading the page. Thanks!';
      return this.error(message);
    };

    this.set(res.body);
  }
}

/**
 * Set items to `v`
 *
 * @param {Array} v
 * @return {Laws} Instance of `Laws`
 * @api public
 */

Laws.prototype.set = function(v) {
  this.items = v;
  this.state('loaded');
  return this;
}

/**
 * Get current `items`
 *
 * @return {Array} Current `items`
 * @api public
 */

Laws.prototype.get = function(index) {
  if ('undefined' !== typeof index) return this.items[index];
  return this.items;
}

/**
 * Get current `items` without parents
 *
 * @return {Array} Current `items` without parents
 * @api public
 */

Laws.prototype.getParents = function (opts) {
  var settings = opts || {};

  function withoutParent(item) {
    return !item.parent;
  }

  function published(item) {
    return item.publishedAt;
  }

  var output = this.items.filter(withoutParent);
  return settings.includeUnpublished ? output : output.filter(published);
}

Laws.prototype.getAuthors = function () {
  var distinct = function distinctAuthors (items) {
    var output = [];
    var props = [];
    items.forEach(function (item) {
      if (!(~props.indexOf(item.id))) {
        props.push(item.id);
        output.push(item);
      }
    });

    return output;
  }

  return distinct(this.getParents()
    .filter(function(law) { return !!law.author })
    .map(function (law) { return { name: law.author, id: law.author }}));
};

Laws.prototype.getTags = function () {
  var distinct = function distinctTags(items) {
    var output = [];
    var props = [];
    items.forEach(function (item) {
      if (!(~props.indexOf(item.id))) {
        props.push(item.id);
        output.push(item);
      }
    })

    return output;
  }

  return distinct(this.getParents()
    .filter(function(law) { return !!law.tag })
    .map(function (law) { return { name: law.tag.name, id: law.tag._id }}));
};

/**
 * Get children `items` of a given parent law
 *
 * @return {Array} Children `items` sorted by `order`
 * @api public
 */

Laws.prototype.getChildren = function (parentId) {
  function byParentId(id) {
    return function (item) {
      return item.parent === id;
    }
  }

  function byOrderAsc(a, b) {
    return a.order - b.order;
  }

  return this.items
    .filter(byParentId(parentId))
    .sort(byOrderAsc);
}

/**
 * Middleware for `page.js` like
 * routers
 *
 * @param {Object} ctx
 * @param {Function} next
 * @api public
 */

Laws.prototype.middleware = function(ctx, next) {
  this.ready(next);
}

/**
 * Handle errors
 *
 * @param {String} error
 * @return {Laws} Instance of `Laws`
 * @api public
 */

Laws.prototype.error = function(message) {
  // TODO: We should use `Error`s instead of
  // `Strings` to handle errors...
  // Ref: http://www.devthought.com/2011/12/22/a-string-is-not-an-error/
  this.state('error', message);
  log('error found: %s', message);

  // Unregister all `ready` listeners
  this.off('ready');
  return this;
}
