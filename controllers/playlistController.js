var Playlist = require('../models/playlist');
var PlaylistTrack = require('../models/playlist_track');
var User = require('../models/user');
var views = require('../views/playlist');

exports.show = function(req, res) {
  Playlist.findById(req.params.id)
  .populate('user')
  .exec((err, result) => {
    if (err) { res.send(err); }
    PlaylistTrack.find({ playlist: req.params.id })
    .populate({
      path: 'track',
      model: 'Track',
      populate: {
        path: 'album',
        model: 'Album',
        populate: {
          path: 'artist',
          model: 'Artist'
        }
      }
    })
    .exec((err2, playlistTracks) => {
      debugger
      var jsonResponse = views.show(result, playlistTracks);
      res.json(jsonResponse);
    })
  });
};

exports.create = function(req, res) {
  var playlist = new Playlist({ title: req.query.title, user: req.query.userId });
  playlist.save((err) => {
    if (err) { res.send(err); }
    res.json(views.show(playlist, []));
  })
};

exports.destroy = function(req, res) {
  var playlist = Playlist.findById(req.params.id);
  playlist.remove((err) => {
    if (err) { res.send(err); }
    res.json(views.show(playlist, []));
  })
};
