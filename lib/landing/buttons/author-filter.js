var laws = require('laws');
var dropdown = require('dropdown');
var t = require('t');

module.exports = function () {
  return dropdown({
    caption: t('landing.filter.author.filterby') + ': %s',
    all: true,
    style: 'primary',
    items: laws.getAuthors().map(function(author) {
      return { id: author.id, text: author.name };
    })
  })
}
