var mongoose = require('mongoose');

var playlistSchema = new mongoose.Schema({
    title: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Playlist', playlistSchema );
