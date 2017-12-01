var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistFollowSchema = new Schema({
  follower: { type: Schema.Types.ObjectId, ref: 'User' },
  playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' }
});

module.exports = mongoose.model('PlaylistFollow', playlistFollowSchema );
