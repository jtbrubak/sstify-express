var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var id3 = require("jsmediatags");

var trackSchema = new Schema({
    title: String,
    albumOrd: Number,
    length: Number,
    audioUrl: String,
    album: { type: Schema.Types.ObjectId, ref: 'Album' }
});

trackSchema.pre('save', function(next) {
  console.log('entering pre function');
  id3.read(this.audioUrl, {
    onSuccess: (tags) => {
      console.log(tags.tags);
    },
    onError: (err) => {
      console.log('UNSUCCESS');
    }
  })
});

module.exports = mongoose.model('Track', trackSchema );
