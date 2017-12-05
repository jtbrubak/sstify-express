var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistFollowSchema = new Schema({
  follower: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  playlist: { type: Schema.Types.ObjectId, ref: 'Playlist', required: true }
});

module.exports = mongoose.model('PlaylistFollow', playlistFollowSchema );
