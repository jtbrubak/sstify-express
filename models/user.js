var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
    sessionToken: String
});

userSchema.plugin(require('basic-auth-mongoose'));

userSchema.post('init', function(doc) {
  doc.sessionToken = crypto.randomBytes(16);
});

module.exports = mongoose.model('User', userSchema );
