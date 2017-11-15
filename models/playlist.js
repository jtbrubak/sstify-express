var mongoose = require('mongoose');

var playlistSchema = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Playlist', playlistSchema );
