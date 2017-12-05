var mongoose = require('mongoose');
var uid = require('uid-safe');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, unique: true },
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

userSchema.methods.resetSessionToken = function() {
  uid(18).then((string) => {
    this.sessionToken = string;
    this.save();
  })
}

userSchema.statics.findByCredentials = function (username, password, cb) {
  return this.findOne({ username: username }, (err, user) => {
    bcrypt.compare(password, user.password, (err, res) => {
      if (res) {
        cb(user);
      } else {
        cb(null);
      }
    })
  });
}

module.exports = mongoose.model('User', userSchema);
