var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    title: String,
    year: Number,
    imageUrl: String,
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
});

module.exports = mongoose.model('Album', albumSchema );
