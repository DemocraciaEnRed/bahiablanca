/**
 * Module Dependencies
 */

var axios = require('axios');
var config = require('lib/config');
var log = require('debug')('democracyos:sms');

/**
 * Constants definition
 */

var SMS_API_URL = config.smsApiUrl;

module.exports.send = function send(phone, message, callback) {
  axios
    .post(SMS_API_URL, 'cel=' + phone + '&mje=' + message + '&reintento=0')
    .then(function (res) {
      log('SMS sent to %s succcesfully', phone)
      callback();
    })
    .catch(function (err) {
      log('Error sending sms to %s, responded with response: %j', user.phone, err)
      callback(new Error('Se ha producido un error enviando el código de validación.\nVuelva a intentarlo nuevamente.'));
    })
}
