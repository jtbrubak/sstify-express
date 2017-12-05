var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Artist = require('./artist');

var albumSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true }
});

module.exports = mongoose.model('Album', albumSchema );
