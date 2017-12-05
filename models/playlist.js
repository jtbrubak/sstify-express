var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistSchema = new Schema({
    title: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Playlist', playlistSchema );
