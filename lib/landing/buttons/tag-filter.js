var laws = require('laws');
var dropdown = require('dropdown');
var t = require('t');

module.exports = function() {
  return dropdown({
    caption: t('landing.filter.tag.filterby') + ': %s',
    all: true,
    style: 'primary',
    items: laws.getTags().map(function(tag) {
      return { id: tag.id, text: tag.name };
    })
  });
}
