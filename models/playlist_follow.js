var mongoose = require('mongoose');

var playlistFollowSchema = new mongoose.Schema({
  follower: { type: Schema.Types.ObjectId, ref: 'User' },
  playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' }
});

module.exports = mongoose.model('PlaylistFollow', playlistFollowSchema );
