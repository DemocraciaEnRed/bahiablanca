var View = require('view');
var template = require('./template.jade');
var ImagePreloader = require('img-preloader');
var log = require('debug')('democracyos:huge-overlay');

module.exports = HugeOverlay;

function HugeOverlay (html, opts) {
  if (!(this instanceof HugeOverlay)) {
    return new HugeOverlay(html, opts);
  }

  opts = opts || {};
  this.background = opts.background;

  if (this.background) {
    log('Background specified; preloading...')
    var view = this;
    var backgroundLoader = new ImagePreloader(this.background);
    backgroundLoader.on('loaded', function () {
      log('Background loaded; rendering goes on');
      view.emit('ready');
    });
    backgroundLoader.load();
  } else {
    this.emit('ready');
  }

  this.html = html;
  View.call(this, template, { html: html, background: this.background });
}

View(HugeOverlay);

HugeOverlay.prototype.switchOn = function() {
  this.bind('click', '.huge-overlay .body .btn', 'toggle');
};

HugeOverlay.prototype.toggle = function() {
  var view = this;

  if (this.el.hasClass('open')) {
    log('toggle: closing');
    this.el.removeClass('open').addClass('close');
  } else if (!this.el.hasClass('close')) {
    log('toggle: opening')
    this.el.addClass('open');
  }
};
