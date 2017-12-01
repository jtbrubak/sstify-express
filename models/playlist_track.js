var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistTrackSchema = new Schema({
  playlistOrd: Number,
  playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' },
  track: { type: Schema.Types.ObjectId, ref: 'Track' }
});

module.exports = mongoose.model('PlaylistTrack', playlistTrackSchema );
