var mongoose = require('mongoose');
var uid = require('uid-safe');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    sessionToken: String,
    playlists: [{ type: Schema.Types.ObjectId, ref: 'Playlist' }],
    followedPlaylists: [{ type: Schema.Types.ObjectId, ref: 'Playlist' }],
    followedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.passwordHash = hash;
    uid(18).then((string) => {
      this.password = this.passwordHash;
      this.sessionToken = string;
      next();
    }).catch((err) => console.log(err));
  }).catch((err) => console.log(err));
});

module.exports = mongoose.model('User', userSchema );
