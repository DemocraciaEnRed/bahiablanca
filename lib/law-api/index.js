/**
 * Module dependencies.
 */

var express = require('express');
var api = require('lib/db-api');
var utils = require('lib/utils');
var accepts = require('lib/accepts');
var restrict = utils.restrict;
var staff = utils.staff;
var pluck = utils.pluck;
var expose = utils.expose;
var official = utils.official;
var log = require('debug')('democracyos:law');
var config = require('lib/config');
var utils = require('lib/utils');
var notifier = require('lib/notifications');
var Batch = require('batch');

var app = module.exports = express();

/**
 * Limit request to json format only
 */

app.use(accepts('application/json'));

app.get('/law/all', function (req, res) {
  log('Request /law/all');

  api.law.all(function(err, lawDocs) {
    if (err) return _handleError(err, req, res);

    // filter only public documents
    lawDocs = lawDocs.filter(function(law) {
      return law.public || (req.user && req.user.staff)
    });

    // add voted flag to returning documents
    lawDocs.forEach(function(law) {
      if (!req.user) return law.voted = false;
      law.voted = law.votedBy(req.user);
    });

    log('Serving laws %j', pluck(lawDocs, 'id'));
    log('First law: %j', lawDocs[0])

    var keys = [
      'id lawId mediaTitle status open closed public draft deleted',
      'tag participants voted createdAt updatedAt closingAt summary',
      'publishedAt deletedAt votable clauseTruncationText links',
      'author authorUrl authorPictureUrl parent order styles imageUrl',
      'keywords party partyUrl authorHasTwitter twitterHandler'
    ].join(' ');

    // Execute in parallel the function that gets the total
    // participants of each parent law.
    var batch = new Batch();

    lawDocs.forEach(function (law) {
      batch.push(function (done) {
        if (law.parent) {
          // If law is not parent, use its participants
          done(null, law);
        } else {
          // If the law is parent, we return the total participants of all its children
          api.law.getTotalParticipants(law.id, function (err, participants) {
            if (err) return res.json(err);
            law.participants = participants;
            done(null, law);
          });
        }
      });
    });

    // Execute the batch and return when the last one finishes
    batch.end(function (err, laws) {
      if (err) return log(err);
      res.json(laws.map(expose(keys)));
    });

  });
});

app.get('/law/:id', function (req, res) {
  log('Request GET /law/%s', req.params.id);

  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);
    if (!lawDoc) return res.send(404);

    log('Serving law %s', lawDoc.id);
    var keys = [
      'id lawId title mediaTitle summary clauses source status open closed public draft deleted',
      'state tag participants styles authorPictureUrl imageUrl',
      'upvotes downvotes abstentions createdAt updatedAt closingAt',
      'publishedAt deletedAt votable clauseTruncationText links author authorUrl',
      'parent order party partyUrl closeMessage authorHasTwitter twitterHandler keywords'
    ].join(' ');

    var l = lawDoc.toJSON();
    if (l.parent) {
      res.json(expose(keys)(l));
    } else {
      // If the law is parent, we return the total participants of all its children
      api.law.getTotalParticipants(l.id, function (err, participants) {
        if (err) return res.json(err);
        l.participants = participants;
        res.json(expose(keys)(l));
      });
    }
  });
});

app.get('/law/:id/participants', function (req, res) {
  log('Request GET /law/%s/participants', req.params.id);
  api.law.getParticipantsCount(req.params.id, function (err, count) {
    return res.json({ count: count });
  });
});

app.get('/law/:id/summary-comments', function (req, res) {
  log('Request /law/%s/summary-comments', req.params.id);

  api.law.get(req.params.id, function (err) {
    if (err) return _handleError(err, req, res);

    var re = new RegExp(req.params.id + '\-\\d');
    var paging = { page: 0, limit: 0, sort: 'score', exclude_user: null };
    api.comment.getFor({context: 'summary', reference: re}, paging, function (err, comments) {
      if (err) return _handleError(err, req, res);

      log('Serving law %s summary\'s comments %j', req.params.id, pluck(comments, 'id'));

      var keys = [
        'id text createdAt editedAt context reference',
        'author.id author.fullName author.avatar',
        'flags upvotes downvotes votes replies.length'
      ].join(' ');

      res.json(comments.map(expose(keys)));
    });

  });
});

app.get('/law/:id/clause-comments', function (req, res) {
  log('Request /law/%s/clause-comments', req.params.id);

  api.law.get(req.params.id, function (err, law) {
    if (err) return _handleError(err, req, res);

    var clauses = law.clauses.map(function (clause) { return clause.id });
    var paging = { page: 0, limit: 0, sort: 'score', exclude_user: null };
    api.comment.getFor({context: 'clause', reference: { $in: clauses } }, paging, function (err, comments) {
      if (err) return _handleError(err, req, res);

      log('Serving law %s clauses\' comments %j', req.params.id, pluck(comments, 'id'));

      var keys = [
        'id text createdAt editedAt context reference',
        'author.id author.fullName author.avatar',
        'flags upvotes downvotes votes replies.length'
      ].join(' ');

      res.json(comments.map(expose(keys)));
    });

  });
});

app.get('/law/:id/comments', function (req, res) {
  log('Request /law/%s/comments', req.params.id);

  var sort = '';
  if (~['-score', '-createdAt', 'createdAt'].indexOf(req.query.sort)) {
    sort = req.query.sort;
  } else {
    sort = '-score';
  }

  var paging = {
    page: req.query.page || 0,
    limit: req.query.limit || 0,
    sort: sort,
    exclude_user: req.query.exclude_user || null
  };

  api.law.comments(req.params.id, paging, function (err, comments) {
    if (err) return _handleError(err, req, res);

    if (!req.query.count) {
      log('Serving law %s comments %j', req.params.id, pluck(comments, 'id'));

      var keys = [
        "id text createdAt editedAt context reference",
        "author.id author.fullName author.avatar author.official",
        "flags upvotes downvotes votes replies.length"
      ].join(' ');

      res.json(comments.map(expose(keys)));
    } else {
      log('Serving law %s comments count: %d', req.params.id, comments.length);

      res.json(comments.length);
    }
  });
});

app.get('/law/:id/my-comments', restrict, function (req, res) {
  log('Request /law/%s/my-comments', req.params.id);

  api.law.userComments(req.params.id, req.user.id, function (err, comments) {
    if (err) return _handleError(err, req, res);

    log('Serving law %s comments %j for user %s', req.params.id, pluck(comments, 'id'), req.user.id);

    var keys = [
      "id text createdAt editedAt context reference",
      "author.id author.fullName author.avatar",
      "flags upvotes downvotes votes replies.length"
    ].join(' ');

    res.json(comments.map(expose(keys)));
  });
});

app.post('/law/:id/comment', restrict, function (req, res) {
  log('Request /law/%s/comment %j', req.params.id, req.body.comment);

  var comment = {};

  // FIXME: data-structure should be the same for side and regular comments
  // I think the faulty approach is with regular comments - gvilarino 1/16/2015
  if (req.body.comment) {
    // side-comments
    comment = req.body.comment;
  }
  else {
    // regular comments
    comment.text = req.body.text;
    comment.context = 'law';
    comment.reference = req.params.id;
  }

  // This must be uncommented on production!
  comment.author = req.user.id;

  api.law.comment(comment, function (err, commentDoc) {
    if (err) return _handleError(err, req, res);

    if (notifier.enabled()) {
      var eventName = 'law-commented';

      var instanceUrl = utils.buildUrl(config);

      notifier.notify(eventName)
        .withData( { law: req.params.id, user: req.user.id, instance: instanceUrl, comment: commentDoc.text } )
        .send(function (err, data) {
          if (err) {
            log('Error when sending notification for event %s', eventName);
          } else {
            log('Successfully notified voting of law %s', req.params.id);
          }
        });
    }

    var keys = [
      'id text',
      'author.id author.fullName author.avatar',
      'upvotes downvotes flags',
      'createdAt replies context reference'
    ].join(' ');

    res.json(200, expose(keys)(commentDoc));
  });
});

app.post('/law/:id/vote', restrict, function (req, res) {
  log('Request /law/%s/vote', req.param('id'));

  api.law
  .vote(
    req.param('id'),
    req.user,
    req.param('value'),
    function (err, law) {
      if (err) return _handleError(err, req, res);

      if (notifier.enabled()) {
        var eventName = 'law-voted';

        var instanceUrl = utils.buildUrl(config);
        var lawUrl = utils.buildUrl(config, { pathname: '/law/' + law.id });

        notifier.notify(eventName)
          .withData( { law: law.id, user: req.user.id, instance: instanceUrl, vote: req.param('value') } )
          .send(function (err, data) {
            if (err) {
              log('Error when sending notification for event %s', eventName);
            } else {
              log('Successfully notified voting of law %s', law.id);
            }
          });
      }

      log('Serving 200 OK response');
      res.send(200);
    }
  );
});

app.post('/law/create', restrict, staff, function (req, res, next) {
  var law = req.body;
  log('Request /law/create %j', law);
  // If no parent is selected, the value will be saved as `null`
  law.parent = law.parent ? law.parent : null;

  api.law.create(law, function (err, lawDoc) {
    if (err) return next(err);
    var keys = [
      'id lawId title mediaTitle summary clauses source state',
      'status open closed public draft deleted tag participants',
      'upvotes downvotes abstentions createdAt updatedAt closingAt',
      'publishedAt deletedAt votable clauseTruncationText links author',
      'authorUrl parent order party partyUrl authorHasTwitter twitterHandler'
    ].join(' ');
    res.json(expose(keys)(lawDoc));
  });
});

app.post('/law/:id', restrict, staff, function (req, res) {
  var law = req.body;
  log('Request POST /law/%s', req.params.id);
  // If no parent is selected, the value will be saved as `null`
  law.parent = law.parent ? law.parent : null;

  api.law.update(req.params.id, law, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);

    log('Serving law %s', lawDoc.id);
    var keys = [
      'id lawId title mediaTitle summary clauses source state',
      'status open closed public draft deleted tag participants',
      'upvotes downvotes abstentions createdAt updatedAt closingAt',
      'publishedAt deletedAt votable clauseTruncationText links',
      'author authorUrl parent order keywords party partyUrl authorHasTwitter twitterHandler'
    ].join(' ');

    res.json(expose(keys)(lawDoc.toJSON()));
  });
});

app.post('/law/:id/clause', restrict, staff, function (req, res) {
  log('Request POST /law/%s/clause', req.params.id);

  var clause = req.body.clause;
  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);

    var clauseDoc = clause && clause.id
      ? lawDoc.clauses.id(clause.id)
      : lawDoc.clauses.create();

    clauseDoc.update(clause);
    if (clauseDoc.isNew) lawDoc.clauses.push(clauseDoc);

    lawDoc.save(function (err, saved) {
      if (err) return _handleError(err, req, res);

      res.json(200, expose('id order clauseName text centered')(clauseDoc));
    });
  });
});

app.del('/law/:id/clause', restrict, staff, function (req, res) {
  log('Request DELETE /law/%s/clause', req.params.id);

  var clause = req.body.clause;
  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);

    lawDoc.clauses.remove(clause);
    log('removed clause %s from law %s', clause, lawDoc.id);

    lawDoc.save(function (err, saved) {
      if (err) return _handleError(err, req, res);

      res.json(200);
    });
  });
});


app.post('/law/:id/link', restrict, staff, function (req, res) {
  log('Request POST /law/%s/link', req.params.id);

  var link = req.body.link;
  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);

    var linkDoc = link && link.id
      ? lawDoc.links.id(link.id)
      : lawDoc.links.create();

    linkDoc.update(link);
    if (linkDoc.isNew) lawDoc.links.push(linkDoc);

    lawDoc.save(function (err, saved) {
      if (err) return _handleError(err, req, res);

      res.json(200, expose('id text url')(linkDoc));
    });
  });
});

app.del('/law/:id/link', restrict, staff, function (req, res) {
  log('Request DELETE /law/%s/link', req.params.id);

  var link = req.body.link;
  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);

    lawDoc.links.remove(link);
    log('removed link %s from law %s', link, lawDoc.id);

    lawDoc.save(function (err, saved) {
      if (err) return _handleError(err, req, res);

      res.json(200);
    });
  });
});

app.post('/law/:id/publish', restrict, staff, function (req, res) {
  log('Request POST /law/%s/publish', req.params.id);

  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);
    if (lawDoc.parent) {
      return res.json(403, 'Parent law should be published first');
    }

    api.law.updateChildren(lawDoc._id,
      { publishedAt: new Date },
      function (err, count) {
        if (err) return _handleError(err, req, res);
        log('Published %d laws', count);
        if (notifier.enabled()) {
          var eventName = 'law-published';

          var instanceUrl = utils.buildUrl(config);
          var lawUrl = utils.buildUrl(config, { pathname: '/law/' + lawDoc.id });

          var data = {
            law: { mediaTitle: lawDoc.mediaTitle, id: lawDoc.id },
            url: lawUrl,
            instance: instanceUrl
          };

          if (config.deploymentId) {
            data.deploymentId = config.deploymentId;
          }

          notifier.notify(eventName)
            .withData(data)
            .send(function (err) {
              if (err) {
                log('Error when sending notification for event %s', eventName);
              } else {
                log('Successfully notified publishing of law %s', lawDoc.id);
              }
            });
        }

        res.json(200);
      }
    );
  });
});

app.post('/law/:id/unpublish', restrict, staff, function (req, res) {
  log('Request POST /law/%s/unpublish', req.params.id);

  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);
    log('lawDoc: %j', lawDoc);
    if (lawDoc.parent) {
      return res.json(403, 'Parent law should be unpublished first');
    }
    api.law.updateChildren(lawDoc._id, { publishedAt: null }, function (err, count) {
      if (err) return _handleError(err, req, res);
      log('Unpublished %d laws', count);
      res.json(200);
    });
  });
});

app.post('/law/:id/delete', restrict, staff, function (req, res) {
  log('Request POST /law/%s/delete', req.params.id);

  api.law.get(req.params.id, function (err, lawDoc) {
    if (err) return _handleError(err, req, res);

    lawDoc.deletedAt = new Date;
    lawDoc.save(function (err, saved) {
      if (err) return _handleError(err, req, res);
      log('deleted law %s', lawDoc.id);
      res.json(200);
    });
  });
});

app.post('/law/:id/message', restrict, official, function (req, res) {
  log('Request POST /law/%s/message', req.params.id);

  api.law.get(req.params.id, function(err, law) {
    if (err) return _handleError(err, req, res);

    law.closeMessage = req.body.message;
    law.save(function (err, saved) {
      if (err) return _handleError(err, req, res);
      log('Message set to law %s', req.params.id);
      res.json(200);
    })
  })
})

function _handleError (err, req, res) {
  log("Error found: %s", err);
  var error = err;
  if (err.errors && err.errors.text) error = err.errors.text;
  if (error.type) error = error.type;

  res.json(400, { error: error });
}
