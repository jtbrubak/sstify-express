var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Artist = require('./artist');
var Track = require('./track');

var albumSchema = new Schema({
    title: String,
    year: Number,
    imageUrl: String,
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
});

module.exports = mongoose.model('Album', albumSchema );
