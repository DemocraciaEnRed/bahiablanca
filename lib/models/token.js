/**
 * Extend module's NODE_PATH
 * HACK: temporary solution
 */

require('node-path')(module);

/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , ShortId = require('mongoose-shortid')


var TokenSchema = new Schema({
    _id: { type: ShortId, len: 5, retries: 10, base: 62 }
  , user:     { type: ObjectId, required: true, ref: 'User' }
  , scope: { type: String, enum: ['password-reset', 'email-validation'], required: true }
  , meta: { type: Object }
  , createdAt:  { type: Date, default: Date.now }
});

TokenSchema.index({ createdAt: -1 });
TokenSchema.index({ scope: -1 });
TokenSchema.index({ user: -1 });

module.exports = function initialize(conn) {
  return conn.model('Token', TokenSchema);
};
