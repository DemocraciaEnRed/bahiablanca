/**
 * Module dependencies.
 */

var config = require('lib/config');
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var gravatar = require('mongoose-gravatar');
var uniqueValidator = require('mongoose-unique-validator');
var regexps = require('lib/regexps');
var supportedLocales = require('lib/l10n/supported');
var normalizeEmail = require('lib/normalize-email');
var t = require('t-component');

var Schema = mongoose.Schema;

/**
 * Define `User` Schema
 */

var UserSchema = new Schema({
    firstName: { type: String }
  , lastName:  { type: String }
  , username:  { type: String }
  , locale:    { type: String, enum: supportedLocales }
  , email:     { type: String, lowercase: true, trim: true, match: regexps.email, unique: true } // main email
  , emailValidated: { type: Boolean, default: false }
  , profiles:  {
        facebook: { type: Object }
      , twitter:  { type: Object }
    }
  , createdAt: { type: Date, default: Date.now }
  , updatedAt: { type: Date }
  , profilePictureUrl: { type: String }
  , disabledAt: { type: Date }
  , notifications: {
    replies: { type: Boolean, default: true },
    'new-topic': { type: Boolean, default: true }
  }
  , phone: { type: String, trim: true, match: regexps.phone }
  , dni: { type: String, match: regexps.dni }
});

/**
 * Define Schema Indexes for MongoDB
 */

UserSchema.index({ createdAt: -1 });
UserSchema.index({ firstName: 1, lastName: 1 });
UserSchema.index({ email: 1 });
UserSchema.index({'notifications.replies': 1});
UserSchema.index({'notifications.new-topic': 1});

UserSchema.pre('save', function(next) {
  this.email = normalizeEmail(this.email);
  next();
});

/**
 * Make Schema `.toObject()` and
 * `.toJSON()` parse getters for
 * proper JSON API response
 */

UserSchema.set('toObject', { getters: true });
UserSchema.set('toJSON', { getters: true });

UserSchema.options.toObject.transform =
UserSchema.options.toJSON.transform = function(doc, ret, options) {
  // remove the hasn and salt of every document before returning the result
  delete ret.hash;
  delete ret.salt;
}

/**
 * -- Model's Plugin Extensions
 */

UserSchema.plugin(gravatar, { default: 'mm', secure: true });

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  userExistsError: 'Ya existe un usuario con el email %s'
});

UserSchema.plugin(uniqueValidator, { message: 'validator.{PATH}.not.unique' });

/**
 * -- Model's API Extension
 */

/**
 * Get `fullName` from `firstName` and `lastName`
 *
 * @return {String} fullName
 * @api public
 */

UserSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

/**
 * Get `staff` check from configured staff array
 *
 * @return {Boolean} staff
 * @api public
 */

UserSchema.virtual('staff').get(function() {
  var staff = config.staff || [];
  return !!~staff.indexOf(this.email);
});

UserSchema.virtual('official').get(function() {
  var officials = config.officialUsers || [];
  return !!~officials.indexOf(this.email);
});

UserSchema.virtual('avatar').get(function() {
  return this.profilePictureUrl
    ? this.profilePictureUrl
    : this.gravatar({ default: 'mm', secure: true });
});

/**
 * Verify if user profile has minimum values needed on its profile
 *
 * @return {Boolean}
 * @api public
 */

UserSchema.virtual('incomplete').get(function() {
  return !(this.email && this.firstName && this.lastName && this.phone && this.dni) || undefined;
});

/**
 * Find `User` by its email
 *
 * @param {String} email
 * @return {Error} err
 * @return {User} user
 * @api public
 */

UserSchema.statics.findByEmail = function(email, cb) {
  return this.findOne({ email: normalizeEmail(email) }).exec(cb);
}

/**
 * Find `User` by social provider id
 *
 * @param {String|Number} id
 * @param {String} social
 * @return {Error} err
 * @return {User} user
 * @api public
 */

UserSchema.statics.findByProvider = function(profile, cb) {
  var path = 'profiles.'.concat(profile.provider).concat('.id');
  var query = {};
  query[path] = profile.id;
  return this.findOne(query)
    .exec(cb);
}

/**
 * Expose `User` Model
 */

module.exports = function initialize(conn) {
  return conn.model('User', UserSchema);
};

