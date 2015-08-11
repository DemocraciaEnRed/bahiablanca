var Emitter = require('emitter');
var inherit = require('inherit');

function ImagePreloader (src) {
  this.src = src;
}

inherit(ImagePreloader, Emitter);

ImagePreloader.prototype.load = function(cb) {
  var self = this;
  var image = new Image();
  image.onload = function () {
    self.emit('loaded');
    if ('function' === typeof cb) {
      cb();
    }
  };

  image.src = this.src;
  return this;
};

module.exports = ImagePreloader;
