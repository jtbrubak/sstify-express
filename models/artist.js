var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Track = require('./track');
var Album = require('./album');

var artistSchema = new Schema({
    name: String,
    thumbUrl: String,
    bannerUrl: String,
    albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
    tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
});

module.exports = mongoose.model('Artist', artistSchema );
