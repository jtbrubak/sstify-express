var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    title: String,
    year: Number,
    imageUrl: String,
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' }
});

module.exports = mongoose.model('Album', albumSchema );
