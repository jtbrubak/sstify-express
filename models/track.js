var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
    title: { type: String, required: true },
    albumOrd: { type: Number, required: true },
    length: { type: Number, required: true },
    audioUrl: { type: String, required: true },
    album: { type: Schema.Types.ObjectId, ref: 'Album', required: true }
});

module.exports = mongoose.model('Track', trackSchema );
