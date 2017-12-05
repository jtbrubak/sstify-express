var User = require('../models/user');
var PlaylistFollow = require('../models/playlist_follow');

exports.create = function(req, res) {
  var playlistFollow = new PlaylistFollow({
    playlist: req.query.playlist,
    follower: req.query.follower });
  playlistFollow.save((err) => {
    if (err) { res.send(err); }
    res.send(playlistFollow);
  })
};

exports.destroy = function(req, res) {
  var playlistFollow = PlaylistFollow.findById(req.params.id);
  playlistFollow.remove((err) => {
    if (err) { res.send(err); }
    res.send('DELETED');
  })
};
