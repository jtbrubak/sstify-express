var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
    title: String,
    album: { type: Schema.Types.ObjectId, ref: 'Album' }
});

module.exports = mongoose.model('Track', trackSchema );
