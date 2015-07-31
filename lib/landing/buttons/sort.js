var dropdown = require('dropdown');
var t = require('t');

var items = [
  { id: 'law-title', text: t('landing.sort-by.title') },
  { id: 'law-closing-date', text: t('landing.sort-by.date')
}];

module.exports = function () {
  return dropdown({
    caption: [t('landing.sort-by'), ': %s'].join(''),
    items: items,
    all: true,
    allText: t('landing.filter.tag.nofilter')
  });
}
