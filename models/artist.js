var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
    name: String,
    thumbUrl: String,
    bannerUrl: String
});

module.exports = mongoose.model('Artist', artistSchema );
