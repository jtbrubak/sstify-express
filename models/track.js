var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
    title: String,
    albumOrd: Number,
    length: Number,
    audioUrl: String,
    album: { type: Schema.Types.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model('Track', trackSchema );
