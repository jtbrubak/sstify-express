var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
    title: String,
    year: Number,
    imageUrl: String,
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
});

userSchema.pre('save', function(next) {
  next();
});

module.exports = mongoose.model('Album', albumSchema );
