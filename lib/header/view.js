/**
 * Module dependencies.
 */

var citizen = require('citizen');
var log = require('debug')('democracyos:header:view');
var o = require('dom');
var snapper = require('snapper');
var template = require('./template');
var View = require('view');
var UserBadge = require('user-badge');
var Headroom = require('headroom');
var isMobile = require('is-mobile');
var config = require('config');
var bus = require('bus');

/**
 * Expose HeaderView
 */

module.exports = HeaderView;

/**
 * Create Sidebar List view container
 */

function HeaderView() {
  View.call(this, template);

  this.user = this.el.find('.user');
}

View(HeaderView);

HeaderView.prototype.switchOn = function() {
  var self = this;
  snapper(this.el);

  if (isMobile()) {
    this.headroomBrowser = initHeadroom('#browser');
    this.headroomContent = initHeadroom('#content');
  }

  citizen.on('loaded', function () {
    var userBadge = new UserBadge();
    userBadge.replace(self.user);
    self.el.find('.anonymous-citizen').addClass('hide');
  });

  citizen.on('unloaded', function () {
    self.user.empty();
    self.el.find('.anonymous-citizen').removeClass('hide');
  });
}

HeaderView.prototype.switchOff = function() {
  snapper.destroy();
  if (this.headroomBrowser) this.headroomBrowser.destroy();
  if (this.headroomContent) this.headroomContent.destroy();
  citizen.off('loaded');
  citizen.off('unloaded');
}

function initHeadroom(scroller) {
  var header = o('header')[0];
  var aside = o('aside');
  scroller = o(scroller);
  var headroom = new Headroom(header, {
    scroller: scroller[0],
    offset: 60,
    tolerance : {
        up : 5,
        down : 0
    },
    onPin: function() {
      aside.removeClass('content-pinned');
    },
    onUnpin: function() {
      aside.addClass('content-pinned');
    }
  });

  headroom.init();
  bus.on('page:change', function () {
    headroom.update();
  })
  return headroom;
}
