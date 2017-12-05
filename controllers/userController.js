var User = require('../models/user');
var Playlist = require('../models/playlist');
var UserFollow = require('../models/user_follow');
var PlaylistFollow = require('../models/playlist_follow');
var views = require('../views/user');

exports.show = function(req, res) {
  User.findById(req.params.id, (err, result) => {
    if (err) { res.send(err); }
    Playlist.find({ user: req.params.id }, (err2, playlists) => {
      if (err2) { res.send(err2); }
      PlaylistFollow.find({ follower: req.params.id })
      .populate('playlist')
      .exec((err3, followedPlaylists) => {
        if (err3) { res.send(err3); }
        UserFollow.find({ follower: req.params.id })
        .populate('followed')
        .exec((err4, followedUsers) => {
          if (err4) { res.send(err4); }
          var jsonResponse = views.show(result, playlists, followedPlaylists, followedUsers);
          res.json(jsonResponse);
        });
      });
    });
  });
};

exports.create = function(req, res) {
  var user = new User({ username: req.query.username, password: req.query.password });
  user.save((err) => {
    if (err) { res.send(err); }
    res.send(user);
  })
};
