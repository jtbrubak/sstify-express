var mongoose = require('mongoose');

var playlistTrackSchema = new mongoose.Schema({
  playlistOrd: Number
});

module.exports = mongoose.model('PlaylistTrack', playlistTrackSchema );
