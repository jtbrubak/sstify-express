var mongoose = require('mongoose');

var trackSchema = new mongoose.Schema({
    title: String,
    album: { type: Schema.Types.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model('Track', trackSchema );
