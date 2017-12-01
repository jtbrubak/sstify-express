var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistSchema = new Schema({
    title: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
});

module.exports = mongoose.model('Playlist', playlistSchema );
