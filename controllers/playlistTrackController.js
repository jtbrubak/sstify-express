var PlaylistTrack = require('../models/playlist_track');
var Playlist = require('../models/playlist');

exports.create = function(req, res) {
  PlaylistTrack.find({ playlist: req.query.playlistId }, (err, tracks) => {
    if (err) { res.send(err); }
    var playlistOrd = tracks.length > 0 ? tracks[tracks.length - 1].playlistOrd + 1 : 1;
    var playlistTrack = new PlaylistTrack({
      playlist: req.query.playlistId, track: req.query.trackId, playlistOrd: playlistOrd });
    playlistTrack.save((err2) => {
      if (err) { res.send(err2); }
      res.send('Confirmed');
    })
  })
};

exports.destroy = function(req, res) {
  var playlistTrack = PlaylistTrack.findById(req.params.id);
  playlistTrack.remove((err) => {
    if (err) { res.send(err); }
    res.send('DELETED');
  })
};
