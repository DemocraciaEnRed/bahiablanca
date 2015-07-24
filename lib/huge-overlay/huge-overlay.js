var View = require('view');
var template = require('./template.jade');

module.exports = HugeOverlay;

function HugeOverlay (html) {
  if (!(this instanceof HugeOverlay)) {
    return new HugeOverlay(html);
  }

  this.html = html;
  View.call(this, template, { html: html });
}

View(HugeOverlay);

HugeOverlay.prototype.switchOn = function() {
  this.bind('click', '.huge-overlay .body .btn', 'toggle');
};

HugeOverlay.prototype.toggle = function() {
  var view = this;
  this.overlay = this.el;
  this.closeBttn = this.el.find('button.huge-overlay-close');
  transEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  };
  transEndEventName = transEndEventNames['transition'],
  support = { transitions: true };

  if (this.overlay.hasClass('open')) {
    this.overlay.removeClass('open').addClass('close');
    var onEndTransitionFn = function( ev ) {
      if (support.transitions) {
        if (ev.propertyName !== 'visibility') return;
        view.overlay.on( transEndEventName, onEndTransitionFn );
      }
      view.overlay.removeClass('close');
    };

    if (support.transitions) {
      this.overlay.on(transEndEventName, onEndTransitionFn);
    } else {
      onEndTransitionFn();
    }
  } else if (!this.overlay.hasClass('close')) {
    this.overlay.addClass('open');
  }
};
