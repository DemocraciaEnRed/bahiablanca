var page = require('page');
var TutorialView = require('./view');

page('/tutorial', function(ctx, next) {
  var view = new TutorialView();
  view.replace('#content');
});
