var dom = require('dom');
var indexOf = require('indexof');
var View = require('view');
var template = require('./template');
var Swipe = require('swipe');
var render = require('render');
var page = require('page');

function Tutorial() {
  View.call(this, template);

  // this.skip = dom('.skip', this.el);
  // this.prevEl = dom('a.btn-prev', this.el)
  // this.nextEl = dom('a.btn-next', this.el)

  // this.switchOn();
}

View(Tutorial);

Tutorial.prototype.switchOn = function () {
  var self = this

  this.bind('click', '[data-tutorial-point]', 'onPointClick')

  setTimeout(function(){
    self.loadCarousel()
  }, 0)
}

Tutorial.prototype.switchOff = function () {
  if (this.carousel) this.carousel.kill()
}

Tutorial.prototype.loadCarousel = function () {
  var el = this.el.find('[data-tutorial]')[0];

  this.carousel = Swipe(el, {
    startSlide: 0,
    auto: 8000,
    autoRestart: true,
    continuous: true,
    disableScroll: true,
    stopPropagation: true,
    callback: this.bound('onTransitionEnd')
  });

  this.points = this.el.find('[data-tutorial-point]')
}

Tutorial.prototype.onTransitionEnd = function (index) {
  this.points.each(function(point, i){
    if (index === i) return point.addClass('active')
    point.removeClass('active')
  })
}

Tutorial.prototype.onPointClick = function (evt) {
  if (!this.carousel) return
  var el = evt.delegateTarget
  var index = parseInt(el.getAttribute('data-tutorial-point'), 10) - 1
  this.carousel.slide(index)
}

module.exports = Tutorial;