var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Track = require('./track');
var Album = require('./album');

var artistSchema = new Schema({
    name: { type: String, required: true },
    thumbUrl: { type: String, required: true },
    bannerUrl: { type: String, required: true }
});

module.exports = mongoose.model('Artist', artistSchema );
